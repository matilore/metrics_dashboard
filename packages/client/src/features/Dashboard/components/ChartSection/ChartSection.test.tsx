import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import ChartSection from "./ChartSection";

const metricsToDisplay = {
  metricId: "calories",
  labels: ["1", "2", "3", "4", "5"],
  dataSeries: [10, 20, 30, 40, 50],
};

describe("ChartSection", () => {
  test("renders a chart and a metric selector", () => {
    const handleOptionChange = jest.fn();
    const selectedOption = "calories";
    render(
      <ThemeProvider theme={theme}>
        <ChartSection
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          metricsToDisplay={metricsToDisplay}
        />
      </ThemeProvider>
    );

    expect(screen.getByText("My metrics")).toBeInTheDocument();
    expect(screen.getByText("Check your progress")).toBeInTheDocument();
    expect(screen.getByLabelText("Calories")).toBeInTheDocument();
    expect(screen.getByLabelText("Max Rate")).toBeInTheDocument();
    expect(screen.getByLabelText("Steps")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "My metrics"
    );
    screen.getByText("Check your progress");
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("calls handleOptionChange on metric selector change", () => {
    const handleOptionChange = jest.fn();
    const selectedOption = "calories";
    render(
      <ThemeProvider theme={theme}>
        <ChartSection
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          metricsToDisplay={metricsToDisplay}
        />
      </ThemeProvider>
    );

    const maxRateOption = screen.getByLabelText("Max Rate");
    maxRateOption.click();
    expect(handleOptionChange).toHaveBeenCalledTimes(1);
    expect(handleOptionChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
