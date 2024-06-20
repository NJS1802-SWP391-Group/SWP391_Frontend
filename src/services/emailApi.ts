import axiosClient from "./axiosClient";

const emailApi = {
  getEmailByOrderId: (id: number) => {
    const url = `/Email/Get-Result/${id}`;
    return axiosClient.get(url);
  },
  sendEmail: (orderID: number) => {
    const url = "/Email/Send-Email-Result";
    return axiosClient.post(url, orderID);
  },
};

export default emailApi;
