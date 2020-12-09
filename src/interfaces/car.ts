export interface Car {
  id: string;
  model: string;
  make?: string;
  version: string;
  releaseYear: Date;
  price: number;
  fuelConsumption: number;
  annualMaintananceCosts: number;
}
