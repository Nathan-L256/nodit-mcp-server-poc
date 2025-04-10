### Installation

Add the following to your `.cursor/mcp.json` or `claude_desktop_config.json` (MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`)

```javascript
{
  "mcpServers": {
    "noditApi": {
      "command": "npx",
      "args": ["-y", "/path/to/local/nodit-mcp"],
      "env": {
        "OPENAPI_MCP_HEADERS": "{\"X-API-KEY\": \"****\"}"
      }
    }
  }
}
```

Don't forget to replace `****` with your api key.

### Examples



### Development

Build

```
npm run build
```
