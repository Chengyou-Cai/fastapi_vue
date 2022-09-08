import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const requests = axios.create({
  //   baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use(
  (config) => {
    // 为请求头挂载 Authorization 字段
    let token = localStorage.getItem("token");
    config.headers.Authorization = token;
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
requests.interceptors.response.use(
  (success) => {
    // 响应状态码为 2xx 3xx 时触发成功的回调，形参中的 response 是“成功的结果”
    //return到axios原地Promise对象，作为成功的结果

    return success;
  },
  (error) => {
    // 响应状态码不是 2xx 时触发失败的回调，形参中的 error 是“失败的结果”
    if (error.response.status === 401) {
      // 无效的 token 或 token 过期了
      // 把 Vuex 中的 token 重置为空，并跳转到登录页面
      localStorage.setItem("token", "");
    }
    return Promise.reject(error);
  }
);

export default requests;
