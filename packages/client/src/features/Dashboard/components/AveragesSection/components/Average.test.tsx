import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

import { render, screen } from "@testing-library/react";
import Average from "./Average";

describe("Average", () => {
  it("renders the label and value correctly", () => {
    const label = "Test Label";
    const value = 42;
    render(
      <ThemeProvider theme={theme}>
        <Average label={label} value={value} />
      </ThemeProvider>
    );
    const labelElement = screen.getByText(`${label} average`);
    const valueElement = screen.getByText(value);
    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
