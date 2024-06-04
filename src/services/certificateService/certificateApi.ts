import axiosClient from "../axiosClient";

const certificateApi = {
  getCertificateByID: (id: number) => {
    return axiosClient.get(`/Result/Get-Result-By-Id/${id}`);
  },
};

export default certificateApi;
