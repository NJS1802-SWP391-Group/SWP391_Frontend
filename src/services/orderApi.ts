import axiosClient from "./axiosClient";

const orderApi = {
  getAll() {
    const url = "/Orders/All";
    return axiosClient.get(url);
  },
};

export default orderApi;
