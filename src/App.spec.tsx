import * as React from "react";
import { render, screen } from "@testing-library/react";
import * as api from "./api/get-cars";
import App from "./App";
import { initialCarData } from "./constants";

describe("main App", () => {
  it("should render the page properly", async () => {
    jest.spyOn(api, "getCars").mockResolvedValueOnce(initialCarData);
    render(<App />);
    screen.getByText(/amazing cars/i);
  });
  it("should fetch car data on initialisation", async () => {
    jest.spyOn(api, "getCars").mockResolvedValueOnce(initialCarData);
    render(<App />);
    expect(api.getCars).toHaveBeenCalledTimes(1);
  });
});
