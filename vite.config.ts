import { defineConfig } from 'vite'
import eslint from "vite-plugin-eslint";
import solid from 'vite-plugin-solid'
import dts from "vite-plugin-dts"
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    eslint(),
    solid(),
    dts({
      // merge declaration files
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "lib/index.ts"),
      name: "solid-form-validation",
      fileName: "solid-form-validation",
      formats: ["es"],
    },
    rollupOptions: {
      // discard "solid-js" & "@solidjs/router" from bundle
      external: ["solid-js", "@solidjs/router"],
      output: {
        // Provides global variables to use in the UMD build
        globals: {}
      }
    }
  }
})
