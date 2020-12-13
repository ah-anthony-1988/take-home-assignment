import * as React from "react";
import { getCars } from "../api";
import { PageContent } from "../components/elements/page-content/page-content";
import { SearchBar } from "../components/search-bar";
import { SearchCarResult } from "../components/search-car-result";
import { RequestState } from "../enums";
import { Car } from "../interfaces";

export const Home: React.FC = () => {
  const [
    getCarsRequestState,
    setGetCarsRequestState,
  ] = React.useState<RequestState>(RequestState.INIT);
  const [cars, setCars] = React.useState<Car[]>([]);
  const [searchResults, setSearchResults] = React.useState<Car[]>(cars);

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

  // data initialisation
  React.useEffect(() => {
    setGetCarsRequestState(RequestState.PENDING);
    getCars()
      .then((data) => {
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
        />
      </PageContent>
    </main>
  );
};
