import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import $RefParser from "@apidevtools/json-schema-ref-parser";

// --- Type Definition for OpenAPI Spec (Simplified) ---
// paths의 인덱스 시그니처를 명확히 하기 위해 타입을 정의합니다.
interface OpenApiOperation {
  operationId?: string;
  description?: string;
  requestBody?: any;
  responses?: any;
  tags?: string[];
  // Add other potential fields if needed
}

interface OpenApiPathItem {
  post?: OpenApiOperation;
  // Add get, put, delete etc. if needed
}

interface NoditOpenApiSpecType {
  openapi: string;
  info: { title: string; version: string };
  servers: {
    url: string;
    variables?: Record<string, { enum?: string[]; default?: string }>;
  }[];
  paths: Record<string, OpenApiPathItem | undefined>; // Use Record<string, ...> for index signature
  components?: any; // Keep components generic for simplicity or define fully
  security?: any[];
  tags?: any[];
}

// --- OpenAPI Spec Import ---
import openapiSpecRaw from './nodit-openapi-spec.js';
// Type Assertion: Import된 객체에 정의된 타입을 적용합니다.
const openapiSpec: NoditOpenApiSpecType = openapiSpecRaw as NoditOpenApiSpecType;

// --- Helper Function: Find API Details ---
function findApiDetails(spec: NoditOpenApiSpecType, operationId: string): { path: string; method: string; details: OpenApiOperation } | null {
  if (!spec || !spec.paths) {
    console.error("findApiDetails: Invalid spec object or missing paths.");
    return null;
  }
  // Now using Record<string, ...>, TS knows pathKey is a valid index type
  for (const pathKey in spec.paths) {
    // Use hasOwnProperty for safer iteration (optional but good practice)
    if (Object.prototype.hasOwnProperty.call(spec.paths, pathKey)) {
      const pathItem = spec.paths[pathKey];
      // Check if post operation exists and has the matching operationId
      if (pathItem?.post?.operationId === operationId) {
        return {
          path: pathKey,
          method: 'post',
          details: pathItem.post, // .post is guaranteed to exist here
        };
      }
    }
  }
  return null; // Not found
}

// --- Helper Function: Create Standard Error Response ---
function createErrorResponse(message: string, toolName: string): { content: { type: "text"; text: string }[] } {
  console.error(`Tool Error (${toolName}): ${message}`);
  return { content: [{ type: "text" as const, text: `Tool Error: ${message}` }] };
}

// --- Main Server Logic ---
async function main() {
  const apiKey = process.env.NODIT_API_KEY;
  if (!apiKey) {
    console.error("Startup Error: NODIT_API_KEY environment variable is not set.");
    process.exit(1);
  }

  // Validate the imported spec basic structure
  if (!openapiSpec?.info?.title || !openapiSpec.servers || !openapiSpec.paths) {
    console.error("Startup Error: Imported OpenAPI spec is invalid or missing required sections (info, servers, paths).");
    process.exit(1);
  }
  console.error(`Using embedded OpenAPI spec: ${openapiSpec.info.title} v${openapiSpec.info.version}`);

  // Extract server variables (safer access with optional chaining)
  const protocolVar = openapiSpec.servers[0]?.variables?.protocol;
  const networkVar = openapiSpec.servers[0]?.variables?.network;
  const availableProtocols = protocolVar?.enum ?? [];
  const availableNetworks = networkVar?.enum ?? [];

  if (availableProtocols.length === 0 || availableNetworks.length === 0) {
    console.warn("Warning: Could not extract valid protocols or networks from embedded OpenAPI spec.");
    // Potentially exit or use hardcoded defaults if this is critical
  }

  // --- MCP Server Setup ---
  const server = new McpServer({
    name: "nodit-blockchain-service",
    version: "1.3.1", // Incremented version
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
      const apiList = Object.entries(openapiSpec.paths) // Use Object.entries for key-value pairs
        .filter(([, pathItem]) => pathItem?.post?.operationId) // Filter for paths with post operationId
        .map(([pathKey, pathItem]) => ({
          operationId: pathItem!.post!.operationId!, // Assert non-null because of filter
          description: pathItem!.post!.description || "No description available.",
          path: pathKey,
        }));

      if (apiList.length === 0) {
        return { content: [{ type: "text", text: "No Nodit API operations found in the embedded specification." }] };
      }

      const formattedList = apiList
        .map(api => `- operationId: ${api.operationId}\n  path: ${api.path}\n  description: ${api.description}`)
        .join("\n\n");

      return { content: [{ type: "text", text: `Available Nodit API Operations:\n\n${formattedList}` }] };
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
          components: openapiSpec.components ?? {}, // Provide components or empty object
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

      const baseUrl = openapiSpec.servers[0]?.url ?? "";
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
          // Try to parse error JSON, otherwise return text
          let errorDetails = `Raw error response: ${responseBodyText}`;
          try {
            const errorJson = JSON.parse(responseBodyText);
            errorDetails = `Error Details (JSON):\n${JSON.stringify(errorJson, null, 2)}`;
          } catch (e) { /* ignore parsing error, use raw text */ }
          return createErrorResponse(`API Error (Status ${response.status}). ${errorDetails}`, toolName);
        }

        // Validate successful response is JSON before returning
        try {
          JSON.parse(responseBodyText); // Validate
          console.error(`Tool (${toolName}): API Success (${response.status}) for ${operationId}`);
          return { content: [{ type: "text", text: responseBodyText }] }; // Return JSON string as text
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