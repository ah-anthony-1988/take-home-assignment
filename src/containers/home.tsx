import * as React from "react";
import { getCars } from "../api";
import { Car } from "../interfaces";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [cars, setCars] = React.useState<Car[]>([]);

  // data initialisation
  React.useEffect(() => {
    getCars()
      .then((data) => {
        setTimeout(() => {
          setCars(data);
          setIsLoading(false);
        }, 1000);
      })
      .catch((e) => {
        console.warn("Something went wrong...");
        setIsLoading(false);
      });
  }, [setCars]);

  return (
    <main>
      <div>searchbar</div>
      {isLoading && <div>isLoading</div>}
      {!isLoading && <div>search results</div>}
    </main>
  );
};
