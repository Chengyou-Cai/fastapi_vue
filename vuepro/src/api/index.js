import requests from "./requests";

// 请求遇到 "/api" 就会自动替换为vue.config.js里target里的服务
const fastapi = "/api";

export const method_get = (route, data) => {
  return requests({
    method: "get",
    url: `${fastapi}${route}`,
    data: data,
  });
};

export const method_post = (route, data) => {
  return requests({
    method: "post",
    url: `${fastapi}${route}`,
    data: data,
  });
};

export const method_post_form = (route, data) => {
  return requests({
    headers: {
      "Content-Type": "multipart/form-data",
    },
    timeout: 10000 * 2,
    method: "post",
    url: `${fastapi}${route}`,
    data: data,
  });
};
