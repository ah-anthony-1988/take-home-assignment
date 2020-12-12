export interface Car {
  id: string;
  model: string;
  make?: string;
  version: string;
  releaseYear: number;
  price: number;
  fuelConsumption: number;
  annualMaintananceCosts: number;
}
