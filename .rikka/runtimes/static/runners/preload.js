export function* loadPlugin() {
    yield import("./plugin").then(mod => mod.plugin)
}