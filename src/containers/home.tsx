import * as React from "react";
import { getCars } from "../api";
import { PageContent } from "../components/elements/page-content/page-content";
import { SearchBar } from "../components/search-bar";
import { SearchCarResult } from "../components/search-car-result";
import { Car } from "../interfaces";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [cars, setCars] = React.useState<Car[]>([]);
  const [searchResults, setSearchResults] = React.useState<Car[]>(cars);

  const onSearch = React.useCallback(
    (query: string) => {
      const results = cars.filter((c) => {
        const stringifiedAndLowerCased = JSON.stringify(c).toLowerCase();
        return stringifiedAndLowerCased.includes(query.toLowerCase());
      });
      setSearchResults(results);
      setIsLoading(false);
    },
    [cars]
  );

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
      <SearchBar onSearch={onSearch} setIsLoading={setIsLoading} />
      <PageContent>
        {isLoading && <div>isLoading</div>}
        {!isLoading && <SearchCarResult cars={searchResults} />}
      </PageContent>
    </main>
  );
};
