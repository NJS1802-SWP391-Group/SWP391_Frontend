import { SendEmail } from "../interfaces/email/EmailInterface";
import axiosClient from "./axiosClient";

const emailApi = {
  getEmailByOrderId: (id: number) => {
    const url = `/Email/Get-Result/${id}`;
    return axiosClient.get(url);
  },
  sendEmail: (data: SendEmail) => {
    const url = "/Email/Send-Email-Result";
    return axiosClient.post(url, data);
  },
};

export default emailApi;
