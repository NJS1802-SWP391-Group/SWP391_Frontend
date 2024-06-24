export interface OrderInterface {
  orderID: number;
  code: string;
  customerId: number;
  firstName: string;
  lastName: string;
  quantity: number;
  time: string;
  status: string;
}

export interface OrderRequest {
  orderID: number | undefined;
  time: string;
  consultingStaffName: string | undefined;
  detailValuations: DetailValuation[];
}

export interface DetailValuation {
  serviceId: number;
  estimateLength: number;
}
