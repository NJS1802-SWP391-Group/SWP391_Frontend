export interface ServiceDetailResponse {
  serviceDetailID: number;
  code: string;
  minRange: number;
  maxRange: number;
  price: number;
  extraPricePerMM: number;
  status: string;
  serviceName: string;
  // serviceID: number;
}

export interface ServiceDetailCreate {
  code: string;
  minRange: number;
  maxRange: number;
  price: number;
  extraPricePerMM: number;
  serviceID: number;
}

export interface ServiceDetailEdit {
  minRange: number;
  maxRange: number;
  price: number;
  extraPricePerMM: number;
}
