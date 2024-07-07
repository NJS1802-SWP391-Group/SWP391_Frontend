import { ServiceDetailCreate } from "../interfaces/serviceDetail/ServiceDetail";
import { ServiceChange } from "../interfaces/services/Service";
import axiosClient from "./axiosClient";

const serviceDetailApi = {
  getAll() {
    const url = "/ServiceDetail/Get-All-Active-Service-Detail";
    return axiosClient.get(url);
  },

  createServiceDetail(data: ServiceDetailCreate) {
    const url = "/ServiceDetail/Create-Service-Detail";
    return axiosClient.post(url, data);
  },

  editServiceDetail(serviceId: number, data: ServiceDetailCreate) {
    const url = `/ServiceDetail/Update-Service-Detail/${serviceId}`;
    return axiosClient.put(url, data);
  },
  deleteServiceDetail(serviceId: number, data: ServiceChange) {
    console.log("first", serviceId);
    const url = `/ServiceDetail/Change-Status/${serviceId}`;
    return axiosClient.put(url, data);
  },
};

export default serviceDetailApi;
