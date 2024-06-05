export interface ManagerApprovalResponse {
  orderDetailID: number;
  orderCode: string;
  orderDetailCode: string;
  serviceName: string;
  estimateLength: number;
  servicePrice: string;
  valuationStaffName: string | null;
  resultPrice: null;
  status: string;
}

export interface ManagerAssignResponse {
  orderDetailID: number;
  orderCode: string;
  orderDetailCode: string;
  serviceName: string;
  estimateLength: number;
  servicePrice: string;
  valuationStaffName: string | null;
  resultPrice: null;
  status: string;
}
