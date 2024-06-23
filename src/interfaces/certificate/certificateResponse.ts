// certificateInterfaces.ts

export interface CertificateImage {
  imageUrl: string;
  imageType: string;
}

export interface CertificateResponse {
  resultId: number;
  isDiamond: boolean;
  code: string;
  origin: string;
  shape: string;
  carat: number;
  color: string;
  clarity: string;
  fluorescence: string;
  symmetry: string;
  polish: string;
  cutGrade: string;
  description: string;
  diamondValue: number;
  status: string;
  orderDetailId: number;
  resultImages: CertificateImage[];
}
