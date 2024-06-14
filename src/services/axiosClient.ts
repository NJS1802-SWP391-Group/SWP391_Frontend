import axios, { AxiosError } from "axios";
// import { isEmpty } from "lodash";

const axiosClient = axios.create({
  baseURL: "https://localhost:7158/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    // Do something before request is sent
    if (token !== null) {
      console.log("Token: ", token);
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<{ content: string }>) => {
    return error.response?.data;
  }
);

export default axiosClient;
