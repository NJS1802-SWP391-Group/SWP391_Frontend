import axiosClient from "./axiosClient";

const serviceDetailApi = {
  getAll() {
    const url = "/ServiceDetail/Get-All-Active-Service-Detail";
    return axiosClient.get(url);
  },
};

export default serviceDetailApi;
