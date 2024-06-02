export interface ManagerApprovalResponse {
  diamond: string;
  service: string;
  valuationStaff: string;
  valuingPrice: string;
  status: string;
}

export interface ManagerAssignResponse {
  orderCode: string;
  orderDetailCode: string;
  serviceName: string;
  estimateLength: number;
  servicePrice: string;
  status: string;
  resultPrice: null;
  valuationStaff: { id: string; name: string } | null;
}
