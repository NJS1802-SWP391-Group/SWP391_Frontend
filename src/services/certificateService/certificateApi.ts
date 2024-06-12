import axiosClient from "../axiosClient";

const certificateApi = {
  getCertificateByID: (resultId: number) => {
    return axiosClient.get(`/Result/Get-Result-By-Id/${resultId}`);
  },

  changeStatusToCertificated: (orderDetailId: number) => {
    return axiosClient.put(`/OrderDetail/Approve-Valuate/${orderDetailId}`);
  },
};

export default certificateApi;
