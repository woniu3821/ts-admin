// import http from "http";
// import https from "https";
// import qs from "qs";
const PRODUCT = process.env.NODE_ENV == "production";

import { AxiosResponse, AxiosRequestConfig } from "axios";
let headers = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest"
};
if (process.env.NODE_ENV == "development") {
  headers = Object.assign({}, headers, {
    wecSchoolId: 1019429679435008,
    wecUserInfo: JSON.stringify({
      userAccount: "123123",
      userName: "admin1",
      userId: "72786"
    })
  });
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: PRODUCT ? "/wec-user-mngt" : "/mock/5bdbe73fedc1b37905bfd6aa/ts",
  headers: headers,
  // 请求后的数据处理
  transformResponse: [
    function(data: AxiosResponse) {
      return data;
    }
  ],
  transformRequest: [
    function(data = {}) {
      return JSON.stringify(data);
    }
  ],
  // 查询对象序列化函数
  //   paramsSerializer: function(params: any) {
  //     return qs.stringify(params);
  //   },
  // 超时设置s
  timeout: 30000,
  // 跨域是否带Token
  withCredentials: false,
  responseType: "json",
  // xsrf 设置
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  // 最多转发数，用于node.js
  maxRedirects: 5,
  // 最大响应数据大小
  maxContentLength: 2000
  // 自定义错误状态码范围
  // validateStatus: function(status: number) {
  //   return status >= 200 && status < 300;
  // }
  // 用于node.js
  //   httpAgent: new http.Agent({ keepAlive: true }),
  //   httpsAgent: new https.Agent({ keepAlive: true })
};
export default axiosConfig;
