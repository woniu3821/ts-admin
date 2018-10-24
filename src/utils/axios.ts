import axios from "axios";
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
const instance = axios.create({
  baseURL: "/wec-user-mngt",
  timeout: 300000,
  transformRequest: [
    function(data = {}) {
      return JSON.stringify(data);
    }
  ],
  headers
  // ,
  // withCredentials: true
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => Promise.resolve(error.response)
);

export default instance;
