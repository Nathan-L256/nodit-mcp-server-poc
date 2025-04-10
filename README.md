### Installation

Add the following to your `.cursor/mcp.json` or `claude_desktop_config.json` (MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`)

```javascript
{
  "mcpServers": {
    "noditApi": {
      "command": "node",
      "args": ["/path/to/local/nodit-mcp-server-poc"],
      "env": {
        "NODIT_API_KEY": "****"
      }
    }
  }
}
```

Don't forget to replace `****` with your api key and `/path/to/local/` with your mcp server.

### Development

Build

```
npm run build
```
