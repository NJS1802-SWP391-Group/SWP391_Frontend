import axiosClient from "../axiosClient";

const managerAssignsApi = {
  getAll() {
    const url = "/OrderDetail/Get-Order-Details";
    return axiosClient.get(url);
  },

  // assignValuationStaff: (assignRequest: AssignRequest) => {
  //   return axiosClient.put("assignValuationStaff", assignRequest);
  // },
};
export default managerAssignsApi;
