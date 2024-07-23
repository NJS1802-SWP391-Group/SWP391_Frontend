export interface AssignValuationStaffResponse {
  orderDetailId: number;
  orderDetailCode: string;
  serviceName: string;
  finalPrice: number;
  resultID: number;
  status: string;
}

export interface ValuationStaffResponse {
  accountId: number;
  userName: string;
  password: string;
  status: string;
  roleName: string;
}
