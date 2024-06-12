import { DetailValuation } from "../interfaces/order/orderInterface";
import { UpdateOrderDetail } from "../interfaces/orderDetail/OrderDetailInterface";
import axiosClient from "./axiosClient";

const orderDetailApi = {
  deleteByOrderDetailId(orderDetailid: number) {
    const url = `/OrderDetail/Delete/OrderDetailId${orderDetailid}`;
    return axiosClient.delete(url);
  },
  createOrderDetail(data: DetailValuation, orderid: number) {
    const url = `/OrderDetail/Create/OrderId${orderid}`;
    return axiosClient.post(url, data);
  },
  updateOrderDetail(data: UpdateOrderDetail) {
    const url = "/OrderDetail/Update";
    return axiosClient.put(url, data);
  },
};

export default orderDetailApi;
