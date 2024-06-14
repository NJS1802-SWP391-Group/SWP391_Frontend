import { RequetsBody } from "../../components/valuationStaff/assignValuationStaff";
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

  assignValuationStaff: (data: RequetsBody | undefined) => {
    return axiosClient.put("/OrderDetail/Assign-Staff-To-Order-Detail", data);
  },

  changeStatusToReAssigning: (orderDetailID: number) => {
    return axiosClient.put(`/OrderDetail/Reject-Valuate/${orderDetailID}`);
  },
};
export default managerAssignsApi;
