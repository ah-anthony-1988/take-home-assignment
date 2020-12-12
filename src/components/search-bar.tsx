import * as React from "react";
import { useDebounce } from "use-debounce";
import styles from "./search-bar.module.scss";

type Props = {
  placeholder?: string;
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<Props> = ({
  onSearch,
  placeholder = "Search car by year or model...",
}) => {
  const [userInput, setUserInput] = React.useState("");
  const [searchQuery] = useDebounce(userInput, 500);

  React.useEffect(() => {
    onSearch(searchQuery);
  }, [onSearch, searchQuery]);

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <label htmlFor="search-car">Search car: </label>
        <input
          type="text"
          id="search-car"
          value={userInput}
          placeholder={placeholder}
          onChange={({ currentTarget }) => setUserInput(currentTarget.value)}
        />
      </div>
      <button
        onClick={() => {
          setUserInput("");
        }}
      >
        clear search
      </button>
    </div>
  );
};
