import React from "react";
import MetricSelector from "./components/MetricSelector";
import Chart from "./components/Chart";

interface MetricsResponse {
  metricId: string;
  labels: string[];
  dataSeries: number[];
}

interface ChartSectionProps {
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
  metricsToDisplay: MetricsResponse;
}

const ChartSection = ({
  handleOptionChange,
  selectedOption,
  metricsToDisplay: { metricId, labels, dataSeries },
}: ChartSectionProps) => {
  return (
    <>
      <h2>My metrics</h2>
      <p>Check your progress</p>
      <MetricSelector
        handleOptionChange={handleOptionChange}
        selectedOption={selectedOption || "calories"}
      />
      <Chart metricId={metricId} labels={labels} dataSeries={dataSeries} />
    </>
  );
};

export default ChartSection;
