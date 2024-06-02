export interface ManagerApprovalResponse {
  diamond: string;
  service: string;
  valuationStaff: string;
  valuingPrice: string;
  status: string;
}

export interface ManagerAssignResponse {
  orderDetail: string;
  diamond: string;
  service: string;
  price: string;
  estimateLength: number;
  valuationStaff: { id: string; name: string } | null;
}
