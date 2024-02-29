export const __config__ = {
  "root": "/",
  "router": [
    {
      "path": "public",
      "type": "static",
      "runtime": "vite",
      "config": ".rikka/static/vite.config.js"
    },
    {
      "path": "routes",
      "type": "ssr",
      "runtime": "bun",
      "config": ".rikka/ssr/bunfig.toml"
    }
  ]
}