import { $ } from "bun";

await $`bun run --config=./.rikka/runtimes/ssr/bunfig.toml --hot ./src/main.jsx`
