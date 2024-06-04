export interface CertificateResponse {
  resultId: number;
  isDiamond: boolean;
  code: string;
  origin: string;
  shape: string;
  carat: string;
  color: string;
  clarity: string;
  fluorescence: string;
  symmetry: string;
  polish: string;
  cutGrade: string;
  valueStatus: string;
  description: string | null;
  diamondValue: number;
  status: string;
  orderDetailId: number;
  issueDate: Date;
  expireDate: Date;
  certificateStatus: string;
}
