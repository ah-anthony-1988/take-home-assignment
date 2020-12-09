import { initialCarData } from "../constants";
import { Car } from "../interfaces";

export const getCars = async (): Promise<Car[]> => {
  if (!window.localStorage.getItem("cars")) {
    window.localStorage.setItem("cars", JSON.stringify(initialCarData));
  }
  const localStorageCars = window.localStorage.getItem("cars") as string;
  const cars = JSON.parse(localStorageCars) as Car[];
  return cars;
};
