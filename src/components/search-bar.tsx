import * as React from "react";
import { useDebounce } from "use-debounce";
import { ReactComponent as SearchIcon } from "../icons/search-icon.svg";
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
      <div className={styles.content}>
        <div className={styles.form}>
          <SearchIcon width={24} height={24} className={styles.searchIcon} />
          <input
            title="search-car"
            type="text"
            id="search-car"
            value={userInput}
            placeholder={placeholder}
            onChange={({ currentTarget }) => setUserInput(currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
};
