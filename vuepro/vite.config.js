import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import * as dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig((tmp) => {
  console.log(import.meta.url);
  console.log(tmp);
  const env = dotenv.config({ path: `./.env.${tmp.mode}` }).parsed;
  console.log(env);
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      hmr: true, //代码热更新
      open: false, //项目启动时，浏览器自启
      port: 4444,
      proxy: {
        ["/api"]: {
          target: "http://127.0.0.1:8888",
          changeOrigin: true, // 跨域
          rewrite: (urlpath) => {
            // console.log(urlpath);
            return urlpath.replace(new RegExp("^/api"), "");
          },
        },
      },
    },
  };
});
