import { ServiceDetailResponse } from "../interfaces/serviceDetail/ServiceDetail";
import axiosClient from "./axiosClient";

const serviceDetailApi = {
  getAll() {
    const url = "/ServiceDetail/Get-All";
    return axiosClient.get(url);
  },

  createServiceDetail(data: ServiceDetailResponse) {
    const url = "/ServiceDetail/Create-Service-Detail";
    return axiosClient.post(url, data);
  },
};

export default serviceDetailApi;
