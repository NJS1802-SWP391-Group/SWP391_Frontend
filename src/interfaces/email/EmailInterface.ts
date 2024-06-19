export interface InforEmail {
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
  completeDate: string;
  detailValuations: DetailValuation[];
}

export interface DetailValuation {
  orderDetailId: number;
  code: string;
  serviceName: string;
  servicePrice: number;
  estimateLength: number;
  status: string;
  price: number;
}
