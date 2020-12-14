import * as React from "react";
import { Car } from "../interfaces";
import { CardLane } from "./card-lane/card-lane";
import { Card } from "./elements/card/card";
import { Heading } from "./elements/heading/heading";
import { RankCarsOnCosts } from "./rank-cars-on-costs";
import styles from "./search-care-result.module.scss";

type Props = {
  cars: Car[];
  isLoading: boolean;
  onSort: (fuelPrice: number, distancePerMonth: number) => void;
};

export const SearchCarResult: React.FC<Props> = ({
  cars,
  isLoading,
  onSort,
}) => (
  <div id="search-results">
    <div className={styles.searchResults}>
      <RankCarsOnCosts onSort={onSort} />
      <div>
        <Heading>Search results</Heading>
        {isLoading && <div>searching for cars...</div>}
        {!isLoading && !!cars.length && (
          <CardLane>
            {cars.map((c) => (
              <Card key={c.id}>
                <div>
                  {/* { 'will be better with react suspense' } */}
                  <img
                    src="https://via.placeholder.com/200"
                    alt={`${c.make} - ${c.model}`}
                  />
                </div>
                <div className={styles.infoEntry}>Make: {c.make}</div>
                <div className={styles.infoEntry}>Model: {c.model}</div>
                <div className={styles.infoEntry}>
                  Version: {c.version ? c.version : "N/A"}
                </div>
                <div className={styles.infoEntry}>
                  Release Year: {c.releaseYear}
                </div>
                <div className={styles.infoEntry}>
                  Price: &euro; {c.price.toLocaleString()}
                </div>
                <div className={styles.infoEntry}>
                  Fuel consumption: {c.fuelConsumption} km / l
                </div>
                <div className={styles.infoEntry}>
                  Maintenance costs: &euro; {c.maintenanceCosts} / yr
                </div>
              </Card>
            ))}
          </CardLane>
        )}
        {!isLoading && !cars.length && (
          <div>No cars were found matching your search query...</div>
        )}
      </div>
    </div>
  </div>
);
