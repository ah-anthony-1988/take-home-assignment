import * as React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import * as api from "./api/get-cars";

describe("main App", () => {
  beforeEach(() => {
    jest.spyOn(api, "getCars").mockResolvedValueOnce([]);
    render(<App />);
  });
  it("should fetch car data on initialisation", () => {
    expect(api.getCars).toHaveBeenCalledTimes(1);
  });
  it("should fetch car data on initialisation2", () => {
    screen.getByText("app header");
  });
});
