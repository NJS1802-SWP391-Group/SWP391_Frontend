import axiosClient from "./axiosClient";

const migrateApi = {
  migrateList() {
    const url = "/Diamond/Mirgate-Diamond-List-To-System-Database";
    return axiosClient.post(url);
  },
};

export default migrateApi;
