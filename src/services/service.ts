import axiosClient from "./axiosClient";

const serviceApi = {
  getAll() {
    const url = "/Service/Get-All";
    return axiosClient.get(url);
  },
};

export default serviceApi;
