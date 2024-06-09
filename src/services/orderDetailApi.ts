import axiosClient from "./axiosClient";

const orderDetailApi = {
  deleteByOrderDetailId(orderDetailid: number) {
    const url = `/OrderDetail/Delete/OrderDetailId${orderDetailid}`;
    return axiosClient.delete(url);
  },
};

export default orderDetailApi;
