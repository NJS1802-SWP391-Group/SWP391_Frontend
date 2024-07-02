import { ServiceCreate } from "../interfaces/services/Service";
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
};

export default serviceApi;
