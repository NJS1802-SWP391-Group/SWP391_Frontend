import axiosClient from "../axiosClient";

const certificateApi = {
  getCertificateByID: (orderDetailID: number) => {
    return axiosClient.get(
      `/Result/Get-Result-By-Order-Detail-Id/${orderDetailID}`
    );
  },
};

export default certificateApi;
