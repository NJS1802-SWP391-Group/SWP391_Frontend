import axiosClient from "./axiosClient";

const resultApi = {
  getResultByOrderDetailId(orderDetailId: number | undefined) {
    const url = `/Result/Get-Result-By-Order-Detail-Id/${orderDetailId}`;
    return axiosClient.get(url);
  },
};

export default resultApi;
