import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import * as dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig((tmp) => {
  const env = dotenv.config({ path: `./.env.${tmp.mode}` }).parsed;
  console.log(env);
  console.log(tmp);
  console.log(import.meta.url);
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
      port: env.VITE_WEBSRC_PORT,
      proxy: {
        [env.VITE_WEBSRC_API]: {
          target: `${env.VITE_SERVER_URL}:${env.VITE_SERVER_PORT}`, // "http://192.168.190.55:8014",
          changeOrigin: true, // 跨域
          rewrite: (urlpath) => {
            // console.log(urlpath);
            return urlpath.replace(new RegExp(`^${env.VITE_WEBSRC_API}`), "");
          },
        },
      },
    },
  };
});
