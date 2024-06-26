import { ServiceCreate } from "../interfaces/services/Service";
import axiosClient from "./axiosClient";

const serviceApi = {
  getAll() {
    const url = "/Service/Get-All";
    return axiosClient.get(url);
  },

  createService(data: ServiceCreate) {
    const url = "/Service/Create-Service";
    return axiosClient.post(url, data);
  },
};

export default serviceApi;
