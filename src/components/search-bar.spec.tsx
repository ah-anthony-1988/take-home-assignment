import { render } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./search-bar";

describe("search bar component", () => {
  it("should have honda as input value when user types honda", () => {
    const onSearch = jest.fn();
    const setIsLoading = jest.fn();
    const { getByTitle, getByDisplayValue } = render(
      <SearchBar onSearch={onSearch} setIsLoading={setIsLoading} />
    );
    const input = getByTitle(/search-car/i);
    userEvent.type(input, "honda");
    getByDisplayValue("honda");
    expect(setIsLoading).toHaveBeenCalledTimes(5);
  });
});
