import { Car, NewCar } from "../interfaces";

export const postCar = async (newCar: NewCar): Promise<void> => {
  const localStorageCars = window.localStorage.getItem("cars") as string;
  const cars = JSON.parse(localStorageCars) as Car[];
  const pseudoRandomId = Math.random().toString(36).substring(7);
  const updatedCars = [...cars].concat({ ...newCar, id: pseudoRandomId });
  window.localStorage.setItem("cars", JSON.stringify(updatedCars));
};
