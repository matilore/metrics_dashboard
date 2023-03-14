import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import Selector from "./Selector";

describe("Selector", () => {
  it("should render radio buttons with labels", () => {
    const handleOptionChange = jest.fn();
    const selectedOption = "calories";
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Selector
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      </ThemeProvider>
    );
    expect(getByLabelText("Calories")).toBeInTheDocument();
    expect(getByLabelText("Max Rate")).toBeInTheDocument();
    expect(getByLabelText("Steps")).toBeInTheDocument();
  });

  it("should call handleOptionChange on radio button change", () => {
    const handleOptionChange = jest.fn();
    const selectedOption = "calories";
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Selector
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      </ThemeProvider>
    );
    fireEvent.click(getByLabelText("Max Rate"));
    expect(handleOptionChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "maxRate" }),
      })
    );
  });
});
