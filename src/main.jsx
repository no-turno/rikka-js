/// <reference types="/Users/noturno/.config/.bun/install/global/node_modules/@types/bun"/>
import { __config__ } from "../.rikka/config";
const config = Bun.TOML.parse(await Bun.file("rikka.config.toml").text());
await write('.rikka/config.js', `export const __config__ = ` + JSON.stringify(config, null, 2));

/**
 * 
 * @param {({type: "ssr" | "static"}) => import("../.rikka/types/route.d.ts")} guard 
 * @param {typeof __config__} ref 
 */
function findTargetConfig(guard, ref) {
    return ref.router.find(guard)
}

const app = {
    routers: {
        'ssr': {
            config: findTargetConfig((c => c.type === "ssr"), __config__).config
        },
        'static': {
            config: findTargetConfig((c) => c.type === "static", __config__).config
        }
    }
};

const apps = Object.values(app).map(key => Object.values(key)).flat().map(({
    config
}) => Bun.file(config));

const runtimes = apps.map(async file => {
    return await file.text()
});

const writeRuntimeConfigToWorkspace = (conf) => {
    return conf.value
}

const runtimesSpecs = await Promise.allSettled(runtimes);

const setup = runtimesSpecs.map(writeRuntimeConfigToWorkspace);


export default {
    port: 8080,
    hostname: "localhost",
    async fetch(req) {
        return new Response(await Bun.$`whoami`.text())
    }
}