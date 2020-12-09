import { Car } from "./interfaces";

export const initialCarData: Car[] = [
  {
    id: "1",
    model: "Honda",
    version: "Civic",
    releaseYear: new Date("2010"),
    price: 15999,
    fuelConsumption: 12,
    annualMaintananceCosts: 600,
  },
  {
    id: "2",
    model: "Toyota",
    version: "Aygo",
    releaseYear: new Date("2015"),
    price: 8000,
    fuelConsumption: 19,
    annualMaintananceCosts: 450,
  },
];
