import * as React from "react";
import { Car } from "../interfaces";
import { Card } from "./card";

type Props = {
  cars: Car[];
};

export const SearchCarResult: React.FC<Props> = ({ cars }) => (
  <div id="search-results">
    {(!!cars.length &&
      cars.map((c) => (
        <Card key={c.id}>{`${c.model} - ${c.version}`}</Card>
      ))) || <div>No cars were found matching your search...</div>}
  </div>
);
