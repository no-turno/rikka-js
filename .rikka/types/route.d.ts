export type Route = {
    "path": string,
    "type": "static" | "ssr" | string,
    "runtime": "vite" | "bun" | "tsup" | "swc" | string,
    "config": string
}