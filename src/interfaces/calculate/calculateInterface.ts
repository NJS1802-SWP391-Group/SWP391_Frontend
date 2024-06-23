export interface CalculateInterface {
  origin: string;
  shape: string;
  carat: number;
  color: string;
  clarity: string;
  fluorescence: string;
  symmetry: string;
  polish: string;
  cutGrade: string;
}

export interface CalculateOutputInterface {
  origin: string;
  shape: string;
  carat: number;
  color: string;
  clarity: string;
  fairPrice: number;
  minPrice: number;
  maxPrice: number;
  last30DayChange: number;
  pricePerCarat: number;
}
