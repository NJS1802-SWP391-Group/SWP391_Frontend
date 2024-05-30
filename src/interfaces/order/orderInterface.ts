export interface OrderInterface {
  orderID: number;
  code: string;
  customerId: number;
  customer: null;
  time: Date;
  quantity: number;
  totalPay: number;
  payment: string;
  statusPayment: string;
  status: string;
  detailValuations: null;
}
