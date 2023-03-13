import React, { useState, useEffect } from "react";
import { Row, Col } from "react-awesome-styled-grid";
import { AveragesSection, ChartSection } from "./components";
import { getMetrics, putMetrics } from "./datamodel/api";
import ModalBody from "@common/Modal";
import {
  RequiredMetricsInputs,
  MetricsListResponse,
} from "@features/Dashboard/contracts";
import {
  StyledContainer,
  StyledHeader,
  DashboardHeaderWrapper,
  Button,
  AveragesHeaderWrapper,
} from "./styleComponents";
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
      <Row>
        <Col offset={{ xs: 0, md: 1, lg: 0 }} xs={4} lg={12} md={6}>
          <DashboardHeaderWrapper>
            <StyledHeader>Welcome to yours dashboard !</StyledHeader>
            <ModalBody
              toggleModal={toggleModal}
              isModalOpen={isModalOpen}
              postNewMetric={postNewMetric}
            >
              <Button>Add a new metric</Button>
            </ModalBody>
          </DashboardHeaderWrapper>
        </Col>
      </Row>
      {showData && (
        <>
          <Row>
            <Col offset={{ xs: 0, md: 1, lg: 0 }} xs={4} lg={12} md={6}>
              <AveragesHeaderWrapper>
                <AveragesSection averages={averages || []} />
              </AveragesHeaderWrapper>
            </Col>
          </Row>
          <Row>
            <Col offset={{ xs: 0, md: 1, lg: 0 }} xs={4} lg={12} md={6}>
              <ChartSection
                handleOptionChange={handleOptionChange}
                selectedOption={selectedOption}
                metricsToDisplay={metricsToDisplay}
              />
            </Col>
          </Row>
        </>
      )}
    </StyledContainer>
  );
};

export default Dashboard;
