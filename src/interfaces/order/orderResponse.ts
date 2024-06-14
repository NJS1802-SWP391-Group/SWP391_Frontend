export interface OrderResponse {
  orderID: number;
  code: string;
  firstName: string;
  lastName: string;
  quantity: number;
  time: string;
  status: string;
  totalPay: number;
  statusPayment: string;
  detailValuations: DetailValuation[];
}

export interface DetailValuation {
  orderDetailId: number;
  code: string;
  serviceName: string;
  estimateLength: number;
  price: number;
}
