export interface ServiceDetail {
  serviceDetailID: number;
  code: string;
  minRange: number;
  maxRange: number;
  price: number;
  extraPricePerMM: number;
  status: Status;
  serviceID: number;
}

export enum Status {
  Active = "Active",
}
