export interface ManagerApprovalResponse {
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
  orderCode: string;
  orderDetailCode: string;
  serviceName: string;
  estimateLength: number;
  servicePrice: string;
  valuationStaffName: string | null;
  resultPrice: null;
  status: string;
}
