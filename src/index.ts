import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import $RefParser from "@apidevtools/json-schema-ref-parser";

interface OpenApiOperation {
  operationId?: string;
  description?: string;
  requestBody?: any;
  responses?: any;
  tags?: string[];
}

interface OpenApiPathItem {
  post?: OpenApiOperation;
}

interface NoditOpenApiSpecType {
  openapi: string;
  info: { title: string; version: string };
  servers: {
    url: string;
    variables?: Record<string, { enum?: string[]; default?: string }>;
  }[];
  paths: Record<string, OpenApiPathItem | undefined>;
  components?: any;
  security?: any[];
  tags?: any[];
}

import openapiSpecRaw from './nodit-openapi-spec.js';
const openapiSpec: NoditOpenApiSpecType = openapiSpecRaw as NoditOpenApiSpecType;
const baseUrl = openapiSpec.servers[0]?.url ?? "";

function findApiDetails(spec: NoditOpenApiSpecType, operationId: string): { path: string; method: string; details: OpenApiOperation } | null {
  if (!spec || !spec.paths) {
    console.error("findApiDetails: Invalid spec object or missing paths.");
    return null;
  }
  for (const pathKey in spec.paths) {
    if (Object.prototype.hasOwnProperty.call(spec.paths, pathKey)) {
      const pathItem = spec.paths[pathKey];
      if (pathItem?.post?.operationId === operationId) {
        return {
          path: pathKey,
          method: 'post',
          details: pathItem.post
        };
      }
    }
  }
  return null;
}

function createErrorResponse(message: string, toolName: string): { content: { type: "text"; text: string }[] } {
  console.error(`Tool Error (${toolName}): ${message}`);
  return { content: [{ type: "text" as const, text: `Tool Error: ${message}` }] };
}

async function main() {
  const apiKey = process.env.NODIT_API_KEY;
  if (!apiKey) {
    console.error("Startup Error: NODIT_API_KEY environment variable is not set.");
    process.exit(1);
  }

  if (!openapiSpec?.info?.title || !openapiSpec.servers || !openapiSpec.paths) {
    console.error("Startup Error: Imported OpenAPI spec is invalid or missing required sections (info, servers, paths).");
    process.exit(1);
  }
  console.error(`Using embedded OpenAPI spec: ${openapiSpec.info.title} v${openapiSpec.info.version}`);

  const protocolVar = openapiSpec.servers[0]?.variables?.protocol;
  const networkVar = openapiSpec.servers[0]?.variables?.network;
  const availableProtocols = protocolVar?.enum ?? [];
  const availableNetworks = networkVar?.enum ?? [];

  if (availableProtocols.length === 0 || availableNetworks.length === 0) {
    console.warn("Warning: Could not extract valid protocols or networks from embedded OpenAPI spec.");
  }

  const server = new McpServer({
    name: "nodit-blockchain-service",
    version: "1.0.0",
    capabilities: {
      resources: {},
      tools: {},
    },
  });

  // --- Tool Definitions ---

  // Tool 1: List APIs
  server.tool("list_nodit_apis", "Lists available Nodit API operations.", {}, async () => {
    const toolName = "list_nodit_apis";
    try {
      const apiList = Object.entries(openapiSpec.paths)
        .filter(([, pathItem]) => pathItem?.post?.operationId)
        .map(([pathKey, pathItem]) => ({
          operationId: pathItem!.post!.operationId!,
          description: pathItem!.post!.description || "No description available.",
          path: pathKey,
        }));

      if (apiList.length === 0) {
        return { content: [{ type: "text", text: "No Nodit API operations found in the embedded specification." }] };
      }

      const serverInfo = JSON.stringify(openapiSpec.servers[0]);

      const formattedList = apiList
        .map(api => `- baseUrl: ${baseUrl} operationId: ${api.operationId}\n  path: ${api.path}\n  description: ${api.description}`)
        .join("\n\n");

      return { content: [{ type: "text", text: `ServerInfo: ${serverInfo}\n\n Available Nodit API Operations:\n\n${formattedList}` }] };
    } catch (error) {
      return createErrorResponse(`Failed to list APIs: ${(error as Error).message}`, toolName);
    }
  });

  // Tool 2: Get API Spec
  server.tool(
    "get_nodit_api_spec",
    "Gets the *fully resolved* spec details for a Nodit API operationId. Returns details as a JSON string.",
    { operationId: z.string().describe("The operationId to get the resolved specification for.") },
    async ({ operationId }) => {
      const toolName = "get_nodit_api_spec";
      console.error(`Tool (${toolName}): Request for operationId: ${operationId}`);

      const apiInfo = findApiDetails(openapiSpec, operationId);
      if (!apiInfo) {
        return createErrorResponse(`OperationId '${operationId}' not found.`, toolName);
      }

      try {
        const specPartToResolve = {
          theOperation: apiInfo.details,
          components: openapiSpec.components ?? {},
        };

        console.error(`Tool (${toolName}): Dereferencing spec for ${operationId}...`);
        const resolvedDetailsContainer: any = await $RefParser.dereference(specPartToResolve);
        console.error(`Tool (${toolName}): Dereferenced spec successfully for ${operationId}.`);

        if (!resolvedDetailsContainer?.theOperation) {
          throw new Error("Dereferencing failed to return the expected structure (missing 'theOperation').");
        }

        const finalSpecDetails = {
          operationId: operationId,
          path: apiInfo.path,
          details: resolvedDetailsContainer.theOperation,
        };

        return { content: [{ type: "text", text: JSON.stringify(finalSpecDetails, null, 2) }] };
      } catch (error) {
        return createErrorResponse(`Failed to resolve spec for ${operationId}: ${(error as Error).message}`, toolName);
      }
    }
  );

  // Tool 3: Call API
  server.tool(
    "call_nodit_api",
    "Calls a specific Nodit API endpoint.",
    {
      protocol: z.enum(availableProtocols as [string, ...string[]]).describe("Protocol (e.g., 'ethereum')"),
      network: z.enum(availableNetworks as [string, ...string[]]).describe("Network (e.g., 'mainnet')"),
      operationId: z.string().describe("Nodit API operationId to call."),
      requestBody: z.record(z.any()).describe("JSON request body matching the API's spec."),
    },
    async ({ protocol, network, operationId, requestBody }) => {
      const toolName = "call_nodit_api";

      const apiInfo = findApiDetails(openapiSpec, operationId);
      if (!apiInfo) {
        return createErrorResponse(`Invalid operationId '${operationId}'. Use 'list_nodit_apis' first.`, toolName);
      }

      if (!baseUrl) {
          return createErrorResponse("Server URL not found in OpenAPI spec.", toolName);
      }

      const pathTemplate = apiInfo.path;
      const apiUrl = baseUrl.replace("{protocol}", protocol).replace("{network}", network) + pathTemplate;

      console.error(`Tool (${toolName}): Calling POST ${apiUrl} (OpID: ${operationId})`);

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'X-API-KEY': apiKey, 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
        });

        const responseBodyText = await response.text();

        if (!response.ok) {
          let errorDetails = `Raw error response: ${responseBodyText}`;
          try {
            const errorJson = JSON.parse(responseBodyText);
            errorDetails = `Error Details (JSON):\n${JSON.stringify(errorJson, null, 2)}`;
          } catch (e) { /* ignore parsing error, use raw text */ }
          return createErrorResponse(`API Error (Status ${response.status}). ${errorDetails}`, toolName);
        }

        try {
          JSON.parse(responseBodyText);
          console.error(`Tool (${toolName}): API Success (${response.status}) for ${operationId}`);
          return { content: [{ type: "text", text: responseBodyText }] };
        } catch (parseError) {
           return createErrorResponse(`API returned OK status but body was not valid JSON. Raw response: ${responseBodyText}`, toolName);
        }

      } catch (error) {
        return createErrorResponse(`Network/fetch error calling API: ${(error as Error).message}`, toolName);
      }
    }
  );

  // --- Start Server ---
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Nodit MCP Server running on stdio.");
}

// --- Run Main ---
main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});