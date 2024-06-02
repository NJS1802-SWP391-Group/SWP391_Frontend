import { OrderRequest } from "../interfaces/order/orderInterface";
import axiosClient from "./axiosClient";

const orderApi = {
  getAll() {
    const url = "/Orders/All";
    return axiosClient.get(url);
  },
  sendRequest(data: OrderRequest) {
    const url = "/Orders/Update";
    return axiosClient.post(url, data);
  },
};

export default orderApi;
