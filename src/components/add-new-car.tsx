import React from "react";
import { NewCar } from "../interfaces";
import { ControlledInput } from "./elements/controlled-input/controlled-input";
import styles from "./add-new-car.module.scss";
import { Heading } from "./elements/heading/heading";
import { RequestState } from "../enums";
import { postCar } from "../api/post-car";

type Props = {
  setRequestState: (state: RequestState) => void;
  requestState: RequestState;
};

export const AddNewCar: React.FC<Props> = ({
  requestState,
  setRequestState,
}) => {
  const [make, setMake] = React.useState<string>("");
  const [model, setModel] = React.useState<string>("");
  const [version, setVersion] = React.useState<string>("");
  const [releaseYear, setReleaseYear] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [fuelConsumption, setFuelConsumption] = React.useState<string>("");
  const [maintenanceCosts, setMaintenanceCosts] = React.useState<string>("");

  const addNewCar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRequestState(RequestState.PENDING);
    const payload: NewCar = {
      make,
      model,
      version,
      releaseYear: Number(releaseYear),
      price: Number(price),
      fuelConsumption: Number(fuelConsumption),
      maintenanceCosts: Number(maintenanceCosts),
    };
    await postCar(payload);
    setTimeout(() => {
      setRequestState(RequestState.SUCCESS);
    }, 1000);
  };

  return (
    <div className={styles.root}>
      <Heading>Create entry</Heading>
      <form onSubmit={addNewCar} className={styles.form}>
        <ControlledInput
          htmlFor="car-make"
          label="Make"
          type="text"
          value={make}
          onChange={({ currentTarget: { value } }) => setMake(value)}
        />
        <ControlledInput
          htmlFor="car-model"
          label="Model"
          type="text"
          value={model}
          onChange={({ currentTarget: { value } }) => setModel(value)}
        />
        <ControlledInput
          htmlFor="car-version"
          label="Version"
          type="text"
          value={version}
          onChange={({ currentTarget: { value } }) => setVersion(value)}
        />
        <ControlledInput
          htmlFor="car-releaseyear"
          label="Year of Release"
          type="text"
          value={releaseYear}
          onChange={({ currentTarget: { value } }) => setReleaseYear(value)}
        />
        <ControlledInput
          htmlFor="car-price"
          label="Price"
          type="text"
          value={price}
          onChange={({ currentTarget: { value } }) => setPrice(value)}
        />
        <ControlledInput
          htmlFor="car-consumption"
          label="Fuel consumption (l/100km)"
          type="text"
          value={fuelConsumption}
          onChange={({ currentTarget: { value } }) => setFuelConsumption(value)}
        />
        <ControlledInput
          htmlFor="car-maintenance-costs"
          label="Annual maintenance costs"
          type="text"
          value={maintenanceCosts}
          onChange={({ currentTarget: { value } }) =>
            setMaintenanceCosts(value)
          }
        />
        <div className={styles.submitSection}>
          {requestState === RequestState.PENDING && (
            <div className={styles.saving}>saving...</div>
          )}
          <button
            type="submit"
            disabled={
              !make ||
              !model ||
              !releaseYear ||
              Number(price) < 0 ||
              !fuelConsumption ||
              !maintenanceCosts ||
              requestState === RequestState.PENDING
            }
          >
            submit car
          </button>
        </div>
      </form>
    </div>
  );
};
