export interface OrderResponse {
  orderID: number;
  code: string;
  customerId: number;
  quantity: number;
  time: string;
  status: string;
  totalPay: number;
  detailValuations: DetailValuation[];
}

export interface DetailValuation {
  orderDetailId: number;
  code: string;
  serviceName: string;
  estimateLength: number;
  price: number;
}
