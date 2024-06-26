export interface ServiceResponse {
  serviceID: number;
  name: string;
  description: string;
  status: string;
}

export interface ServiceCreate {
  name: string;
  description: string;
}
