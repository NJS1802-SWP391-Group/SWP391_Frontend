import { OrderRequest } from "../interfaces/order/orderInterface";
import axiosClient from "./axiosClient";

const orderApi = {
  getAll() {
    const url = "/Orders/All";
    return axiosClient.get(url);
  },
  sendRequest(data: OrderRequest) {
    const url = "/Orders/Submit";
    return axiosClient.post(url, data);
  },
  pay(orderId: number, payment: string) {
    const url = `/Orders/Pay/Id=${orderId}`;
    return axiosClient.put(url, payment);
  },
};

export default orderApi;
