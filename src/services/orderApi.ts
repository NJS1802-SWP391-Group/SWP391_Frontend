import { SendRequest } from "../components/forms/ValuationForm";
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
    const url = `/Orders/Pay/Id${orderId}`;
    return axiosClient.put(url, payment);
  },
  valuateRequest(data: SendRequest) {
    const url = "/Orders/Request";
    return axiosClient.post(url, data);
  },
  viewReceiptbill(data: number) {
    const url = `/Orders/View/Id${data}`;
    return axiosClient.get(url);
  },
  getOrdersByCustomer(id: number) {
    const url = `/Orders/View/CustomerId${id}`;
    return axiosClient.get(url);
  },
  sealOrder(orderId: number) {
    const url = `/Orders/Confirm-Seal-Order/${orderId}`;
    return axiosClient.put(url);
  },
  unsealOrder(orderId: number) {
    const url = `/Orders/Confirm-Unseal-Order/${orderId}`;
    return axiosClient.put(url);
  },
  returnOrder(orderId: number) {
    const url = `/Orders/Confirm-Return-Order/${orderId}`;
    return axiosClient.put(url);
  },
};

export default orderApi;
