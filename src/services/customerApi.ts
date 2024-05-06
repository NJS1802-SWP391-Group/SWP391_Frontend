import axiosClient from "./axiosClient";

const customerApi = {
  getAll(params: string) {
    const url = "/customers";
    return axiosClient.get(url, { params: params });
  },

  get(id: number) {
    const url = `/customers/${id}`;
    return axiosClient.get(url);
  },
  add(data: string) {
    const url = "/customers";
    return axiosClient.post(url, data);
  },
  //   update(data: string) {
  //     data là 1 object Customer, tạo interface có field id thì sẽ hết lỗi đòng dưới.
  //     const url = `/customers/${data.id}`;
  //     return axiosClient.put(url, data);
  //   },
  remove(id: number) {
    const url = `/customers/${id}`;
    return axiosClient.delete(url);
  },
};

export default customerApi;
