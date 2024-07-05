import { ServiceCreate } from "../interfaces/services/Service";
import { ServiceChange } from "./../interfaces/services/Service";
import axiosClient from "./axiosClient";

const serviceApi = {
  getAllService() {
    const url = "/Service/Get-All-Active-Service";
    return axiosClient.get(url);
  },
  createService(data: ServiceCreate) {
    const url = "/Service/Create-Service";
    return axiosClient.post(url, data);
  },
  editService(serviceId: number, data: ServiceCreate) {
    const url = `/Service/Update-Service/${serviceId}`;
    return axiosClient.put(url, data);
  },
  changeService(serviceId: number, data: ServiceChange) {
    console.log("first", serviceId);
    const url = `/Service/Change-Status/${serviceId}`;
    return axiosClient.put(url, data);
  },
};

export default serviceApi;
