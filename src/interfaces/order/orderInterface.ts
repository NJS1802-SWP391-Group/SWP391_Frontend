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
  time: Date;
  consultingStaffName: string;
  detailValuations: DetailValuation[];
}

export interface DetailValuation {
  serviceId: number;
  estimateLength: number;
}
