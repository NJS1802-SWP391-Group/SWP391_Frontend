import axiosClient from "./axiosClient";

const accountApi = {
  getAccountInfo: () => {
    const url = "/Auth/CheckTokenCustomer";
    return axiosClient.get(url);
  },
  getAccountSystemInfo: () => {
    const url = "/Auth/CheckToken";
    return axiosClient.get(url);
  },
};

export default accountApi;
