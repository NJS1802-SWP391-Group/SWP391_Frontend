import { DiamondDetailResponse } from "../../interfaces/valuationStaff/diamondDetailResponse";
import axiosClient from "../axiosClient";

const valuationStaffApi = {
  getValuationStaff() {
    const url = "/Users/Get-All-Active-Valuation-Staff";
    return axiosClient.get(url);
  },

  createDiamondDetail: (diamondDetailResponse: DiamondDetailResponse) => {
    return axiosClient.post("/Result/Create-Result", diamondDetailResponse);
  },
  // assignValuationStaff: (assignRequest: AssignRequest) => {
  //   return axiosClient.put("assignValuationStaff", assignRequest);
  // },
};
export default valuationStaffApi;