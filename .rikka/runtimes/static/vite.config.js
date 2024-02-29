import { getPort } from "get-port-please";
import { defineConfig } from "vite";

export default defineConfig({
  envDir: import.meta.dirname + "/.env",
  base: "/",
  root: "./static",
  publicDir: "./static/public",
  server: {
    port: await getPort({
      name: import.meta.dir,
      port: 3000,
      ports: [3000, 3010],
      alternativePortRange: [3011, 3080],
    }),
  },
});
