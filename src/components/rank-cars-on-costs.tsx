import React from "react";
import { Card } from "./elements/card/card";
import { ControlledInput } from "./elements/controlled-input/controlled-input";
import styles from "./rank-cars-on-costs.module.scss";

type Props = {
  onSort: (fuelPrice: number, distancePerMonth: number) => void;
};

export const RankCarsOnCosts: React.FC<Props> = ({ onSort }) => {
  const [fuelPrice, setFuelprice] = React.useState<string>("");
  const [distance, setDistance] = React.useState<string>("");

  return (
    <div className={styles.root}>
      <Card>
        <div className={styles.title}>Sort On Costs</div>
        <form className={styles.form}>
          <ControlledInput
            direction="column"
            htmlFor="rank-fuel-price"
            label="Fuel Price"
            value={fuelPrice}
            type="text"
            onChange={({ currentTarget }) => setFuelprice(currentTarget.value)}
          />
          <ControlledInput
            direction="column"
            htmlFor="rank-distance"
            label="Distance per month"
            value={distance}
            type="text"
            onChange={({ currentTarget }) => setDistance(currentTarget.value)}
          />
          <button
            type="button"
            onClick={() => onSort(Number(fuelPrice), Number(distance))}
          >
            Rank Cars
          </button>
        </form>
      </Card>
    </div>
  );
};
