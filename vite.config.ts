import { defineConfig } from "vite";
//@ts-expect-error No declaration file
import eslint from "vite-plugin-eslint";
import solid from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    eslint(),
    solid(),
    dts({
      exclude: ["node_modules", "src/app", "src/demo"],
      include: "src/lib",
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    // sourcemap: true,
    // minify: false,
    /* Removes public dir from bundle */
    copyPublicDir: false,
    lib: {
      entry: resolve(import.meta.dirname, "src/lib/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      /* Discard "solid-js" & "@solidjs/router" from bundle */
      external: ["solid-js", "@solidjs/router"],
    },
  },
});
