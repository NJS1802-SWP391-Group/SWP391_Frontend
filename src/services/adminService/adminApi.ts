import axiosClient from "../axiosClient";

const adminApi = {
  getChartOrder() {
    const url = "/Admin/Order/Quantity";
    return axiosClient.get(url);
  },
  getChartRevenue() {
    const url = "/Admin/Order/Quantity/Payment";
    return axiosClient.get(url);
  },
  getChartService() {
    const url = "/Admin/Service/Quantity";
    return axiosClient.get(url);
  },
};

export default adminApi;
