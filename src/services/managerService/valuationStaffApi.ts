import { DiamondDetailResponse } from "../../interfaces/valuationStaff/diamondDetailResponse";
import axiosClient from "../axiosClient";

const valuationStaffApi = {
  getValuationStaff() {
    const url = "/Users/Get-All-Active-Valuation-Staff";
    return axiosClient.get(url);
  },

  // createDiamondDetail: (diamondDetailResponse: DiamondDetailResponse) => {
  //   return axiosClient.post("/Result/Create-Result", diamondDetailResponse);
  // },

  createDiamondDetail: (formData: DiamondDetailResponse) => {
    const url = "/Result/Create-Result";

    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getOrderDetailByValuationStaffId: (accountId: number | undefined) => {
    return axiosClient.get(
      `/OrderDetail/Get-Order-Details-By-Valuating-Staff/${accountId}`
    );
  },

  changeStatusToCompleted: (orderDetailID: number) => {
    return axiosClient.put(`/OrderDetail/Complete-Valuate/${orderDetailID}`);
  },
};
export default valuationStaffApi;
