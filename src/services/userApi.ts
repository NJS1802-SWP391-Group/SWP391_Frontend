import axiosClient from "./axiosClient";

const userApi = {
  countAccount() {
    const url = "/Users/count-accounts";
    return axiosClient.get(url);
  },
  countCustomer() {
    const url = "/Users/count-customers";
    return axiosClient.get(url);
  },
  countConsultingStaff() {
    const url = "/Users/count-consulting-staffs";
    return axiosClient.get(url);
  },
  countValuationStaff() {
    const url = "/Users/count-valuating-staffs";
    return axiosClient.get(url);
  },
  countManager() {
    const url = "/Users/count-managers";
    return axiosClient.get(url);
  },
  getAllAccount() {
    const url = "/Users/GetAllUsers";
    return axiosClient.get(url);
  },
};

export default userApi;
