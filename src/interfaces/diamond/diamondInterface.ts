export interface DiamondCheckValue {
  diamondCheckValueId: number;
  updateDay: string;
  price: number;
}

export interface Diamond {
  diamondCheckId: number;
  fairPrice: number;
  minPrice: number;
  maxPrice: number;
  updateDay: string;
  ratio: number;
  certificateId: string;
  origin: string;
  shape: string;
  linkImageShape: string;
  carat: number;
  color: string;
  clarity: string;
  fluorescence: string;
  symmetry: string;
  polish: string;
  cutGrade: string;
  cutScore: number;
  certDate: string;
  measurement: string;
  clarityCharacteristic: string;
  comment: string;
  status: string;
  diamondCheckValues: DiamondCheckValue[];
}
