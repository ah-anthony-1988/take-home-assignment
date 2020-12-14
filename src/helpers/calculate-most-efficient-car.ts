import { Car } from "../interfaces";

export const calculateFuelCostsPerMonth = (
  fuelPrice: number,
  fuelConsumption: number, // km / liter
  distancePerMonth: number
) => {
  const numberOfLitersFuel = distancePerMonth / fuelConsumption;
  return fuelPrice * numberOfLitersFuel;
};

export const calculateMaintenanceCosts = (
  maintenanceCosts: number,
  years: number = 4
) => {
  return maintenanceCosts * years;
};

export const calculateAnnualCosts = (
  { price, maintenanceCosts, fuelConsumption }: Car,
  fuelPrice: number,
  distancePerMonth: number,
  years: number = 4
) => {
  const monthsInYear = 12;
  const fuelCostsPerMonth = calculateFuelCostsPerMonth(
    fuelPrice,
    fuelConsumption,
    distancePerMonth
  );
  const totalFuelCosts = fuelCostsPerMonth * monthsInYear * years;
  const annualMaintenanceCosts = maintenanceCosts * years;
  const carPricePerYear = price / years;
  return totalFuelCosts + annualMaintenanceCosts + carPricePerYear;
};
