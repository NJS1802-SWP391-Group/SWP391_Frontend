import axiosClient from "./axiosClient";

const serviceDetailApi = {
  getAll() {
    const url = "/ServiceDetail/Get-All";
    return axiosClient.get(url);
  },
};

export default serviceDetailApi;
