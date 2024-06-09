import axiosClient from "../axiosClient";

const certificateApi = {
  getCertificateByID: (resultId: number) => {
    return axiosClient.get(`/Result/Get-Result-By-Id/${resultId}`);
  },
};

export default certificateApi;
