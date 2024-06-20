export interface OrderListCustomerInterface {
  orderID: number;
  firstName: string;
  lastName: string;
  code: string;
  customerId: number;
  quantity: number;
  time: string;
  status: string;
  totalPay: number;
  payment: string;
  statusPayment: string;
  detailValuations: DetailValuation[];
}

export interface DetailValuation {
  orderDetailId: number;
  code: string;
  serviceName: string;
  estimateLength: number;
  status: string;
  price: number;
}
