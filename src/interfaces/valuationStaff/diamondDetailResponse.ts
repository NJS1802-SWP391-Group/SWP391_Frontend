export interface DiamondDetailResponse {
  isDiamond: boolean;
  origin: string;
  shape: string;
  carat: string;
  color: string;
  clarity: string;
  fluorescence: string;
  symmetry: string;
  polish: string;
  cutGrade: string;
  description: string;
  diamondValue: number;
  propotionImage: File | null;
  clarityImages: File[] | null;
  orderDetailId: number;
}
