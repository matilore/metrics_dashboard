import React, { useState, useEffect } from "react";
import { HeaderSection, AveragesSection, ChartSection } from "./components";
import { getMetrics, putMetrics } from "./datamodel/api";
import {
  RequiredMetricsInputs,
  MetricsListResponse,
} from "@features/Dashboard/contracts";
import { StyledContainer } from "./styleComponents";
import { DEFAULT_SELECTED_METRIC, DEFAULT_RESPONSE_METRICS } from "./constants";

const Dashboard = () => {
  const [metricsListResponse, setMetricsListResponse] =
    useState<MetricsListResponse>(DEFAULT_RESPONSE_METRICS);
  const [isDataEmpty, setIsDataEmpty] = useState(false);
  const [loaded, setIsLoaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(DEFAULT_SELECTED_METRIC);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getMetricsList = (): void => {
    getMetrics().then((metricsListResponseApi) => {
      setMetricsListResponse(metricsListResponseApi);
      setIsLoaded(true);
      setIsDataEmpty(metricsListResponseApi.isEmpty);
    });
  };

  const postNewMetric = ({
    metricId,
    metricValue,
  }: RequiredMetricsInputs): void => {
    const metricsParams: RequiredMetricsInputs = {
      metricId,
      metricValue,
    };
    putMetrics(metricsParams).then((metricsListResponseApi) => {
      setMetricsListResponse(metricsListResponseApi);
      toggleModal();
    });
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    getMetricsList();
  }, []);

  const { averages } = metricsListResponse;
  const metricsToDisplay = metricsListResponse[selectedOption];
  const showData = loaded && !isDataEmpty;

  return (
    <StyledContainer>
      <HeaderSection
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        postNewMetric={postNewMetric}
      />
      {showData && (
        <>
          <AveragesSection averages={averages || []} />
          <ChartSection
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
            metricsToDisplay={metricsToDisplay}
          />
        </>
      )}
    </StyledContainer>
  );
};

export default Dashboard;
