import * as React from "react";
import { getCars } from "../api";
import { PageContent } from "../components/elements/page-content/page-content";
import { SearchBar } from "../components/search-bar";
import { SearchCarResult } from "../components/search-car-result";
import { RequestState } from "../enums";
import { calculateAnnualCosts } from "../helpers/calculate-most-efficient-car";
import { Car } from "../interfaces";

export const Home: React.FC = () => {
  const [
    getCarsRequestState,
    setGetCarsRequestState,
  ] = React.useState<RequestState>(RequestState.INIT);
  const [cars, setCars] = React.useState<Car[]>([]);
  // TODO: use this state to distinguish between api fetch state and sorting state, as they are different
  const [
    searchingResultsState,
    setSearchingResultsState,
  ] = React.useState<RequestState>(RequestState.INIT);
  const [searchResults, setSearchResults] = React.useState<Car[]>([]);

  const onSearch = React.useCallback(
    (query: string) => {
      const results = cars.filter((c) => {
        const joinedValuesString = Object.entries(c)
          .filter(
            ([prop]) =>
              prop === "make" || prop === "model" || prop === "releaseYear"
          )
          .map(([prop, value]) => value)
          .join("")
          .toLowerCase();
        return joinedValuesString.includes(query.toLowerCase());
      });
      setSearchResults(results);
      setGetCarsRequestState(RequestState.SUCCESS);
    },
    [cars]
  );

  const onSortOnCheapest = (fuelPrice: number, distancePerMonth: number) => {
    setGetCarsRequestState(RequestState.PENDING);
    // mock sorting procedure, as this has to be done on all cars in the database
    setTimeout(() => {
      const sortedResults = [...searchResults];
      sortedResults.sort((currentCar, nextCar) => {
        const annualCostsCurrentCar = calculateAnnualCosts(
          currentCar,
          fuelPrice,
          distancePerMonth
        );
        const annualCostsNextCar = calculateAnnualCosts(
          nextCar,
          fuelPrice,
          distancePerMonth
        );
        if (annualCostsCurrentCar < annualCostsNextCar) return -1;
        return 1;
      });
      setSearchResults(sortedResults);
      setGetCarsRequestState(RequestState.SUCCESS);
    }, 1000);
  };

  // data initialisation
  React.useEffect(() => {
    setGetCarsRequestState(RequestState.PENDING);
    getCars()
      .then((data) => {
        // mock fetch duration from api
        setTimeout(() => {
          setCars(data);
        }, 1000);
      })
      .catch(() => {
        console.warn("Something went wrong...");
      });
    return function cancelStateUpdates() {
      setGetCarsRequestState((prev) => prev);
      setCars((prev) => prev);
    };
  }, []);

  return (
    <main>
      <SearchBar
        onSearch={onSearch}
        setIsLoading={() => {
          setGetCarsRequestState(RequestState.PENDING);
        }}
      />
      <PageContent>
        <SearchCarResult
          cars={searchResults}
          isLoading={getCarsRequestState === RequestState.PENDING}
          onSort={onSortOnCheapest}
        />
      </PageContent>
    </main>
  );
};
