import { RequetsBody } from "../../components/manager/assignManager";
import axiosClient from "../axiosClient";

const managerAssignsApi = {
  getAll() {
    const url = "/OrderDetail/Get-Assigning-Order-Details";
    return axiosClient.get(url);
  },

  getAllCompledted() {
    const url = "/OrderDetail/Get-Completed-Order-Details";
    return axiosClient.get(url);
  },

  assignValuationStaff(data: RequetsBody | undefined) {
    return axiosClient.put("/OrderDetail/Assign-Staff-To-Order-Detail", data);
  },

  // assignValuationStaff: (assignRequest: AssignRequest) => {
  //   return axiosClient.put("assignValuationStaff", assignRequest);
  // },
};
export default managerAssignsApi;
