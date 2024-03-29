import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/openapi/index.ts",
    "src/fs-router/index.ts",
    "src/client/index.ts",
  ],
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  outDir: "dist",
  sourcemap: false,
  external: ["zod", "zod-to-json-schema"],
});
