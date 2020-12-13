export interface NewCar {
  make: string;
  model: string;
  version?: string;
  releaseYear: number;
  price: number;
  fuelConsumption: number;
  maintenanceCosts: number;
}

export interface Car extends NewCar {
  id: string;
}
