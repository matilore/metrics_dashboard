import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-awesome-styled-grid";
import AveragesSection from "./components/AveragesSection";
import ChartSection from "./components/ChartSection";
import { getMetrics } from "./datamodel/api";
import ModalBody from "@common/Modal";

const averages = [
  { id: "calories", value: 2400 },
  { id: "max_rate", value: 2400 },
  { id: "steps", value: 2400 },
];

const StyledContainer = styled(Container)`
  height: 100%;
  > div {
    margin: 40px 0;
  }
`;

const DashboardHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 160px;
  height: 40px;
  left: 1013px;
  top: 118px;
  background: ${({ theme }) => theme.COLORS.MOONSTONE};
  border-radius: 8px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM};
  cursor: pointer;
  border: none;
`;

const AveragesHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dashboard = () => {
  const [metricsListResponse, setMetricsListResponse] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const getMetricsList = () => {
    getMetrics().then((metricsListResponseApi) => {
      // setMetricsListResponse(metricsListResponseApi)
      setLoaded(true);
    });
  };

  useEffect(() => {
    getMetricsList();
  }, []);

  // const { metrics } = metricsListResponse
  // const showList = !!metrics && !!metrics.length

  console.log("metricsListResponse", metricsListResponse);

  return (
    <StyledContainer>
      <Row>
        <Col offset={{ xs: 0, md: 1, lg: 0 }} xs={4} lg={12} md={6}>
          <DashboardHeaderWrapper>
            <h1>Welcome to yours dashboard !</h1>
            <ModalBody>
              <Button>Add a new metric</Button>
            </ModalBody>
          </DashboardHeaderWrapper>
        </Col>
      </Row>
      <Row>
        <Col offset={{ xs: 0, md: 1, lg: 0 }} xs={4} lg={12} md={6}>
          <AveragesHeaderWrapper>
            <AveragesSection averages={averages} />
          </AveragesHeaderWrapper>
        </Col>
      </Row>
      <Row>
        <Col offset={{ xs: 0, md: 1, lg: 0 }} xs={4} lg={12} md={6}>
          <ChartSection />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Dashboard;
