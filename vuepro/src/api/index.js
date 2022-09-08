import requests from "./requests";

// 请求遇到 "/api" 就会自动替换为vue.config.js里target里的服务
const fastapi = "/api";

export const test = (data) => {
  return requests({
    url: `${fastapi}/mess/`,
    method: "get",
    data: data,
  });
};

export const login = (data) => {
  return requests({
    url: `${fastapi}/`,
    method: "get",
    data: data,
  });
};
