import React from "react";
import styles from "./add-car-succes.module.scss";
import { Heading } from "./elements/heading/heading";

type Props = {
  renderAddCar: () => void;
};

export const AddCarSuccess: React.FC<Props> = ({ renderAddCar }) => (
  <div className={styles.root}>
    <Heading>Succesfully saved!</Heading>
    <button onClick={renderAddCar}>create another entry</button>
  </div>
);
