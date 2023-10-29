import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // forward `/uploads/` endpoint to -> `http://localhost:5000/uploads/`
  //     "^/uploads": {
  //       target: "http://localhost:5000/",
  //     },
  //   },
  // },
  // base: "",
  // resolve: {
  //   alias: {
  //     "@assets": resolve("./src/assets/gui"),
  //   },
  // },
  build: {
    assetsInlineLimit: 3e6,
    //   rollupOptions: {
    //     input: "src/assets/gui",
    //     output: {
    //       dir: "global",
    //     },
    //   },
  },
})
