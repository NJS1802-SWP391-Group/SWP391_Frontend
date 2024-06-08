import axiosClient from "./axiosClient";

const accountApi = {
  getAccountInfo: () => {
    const url = "/Auth/CheckToken";
    return axiosClient.get(url);
  },
};

export default accountApi;
