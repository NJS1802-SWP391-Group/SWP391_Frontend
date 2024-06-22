export interface DiamondDetailResponse {
  isDiamond: boolean;
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
  ProportionImages: File | null;
  ClarityImages: File | null;
  orderDetailId: number;
}
