import React from "react";
import { Row, Col } from "react-awesome-styled-grid";
import { AveragesProps } from "./contracts";
import { Average } from "./components";
import { AveragesHeaderWrapper } from "./styleComponents";

const Averages = ({ averages }: AveragesProps) => {
  return (
    <Row>
      <Col offset={{ xs: 0, md: 1, lg: 0 }} xs={4} lg={12} md={6}>
        <AveragesHeaderWrapper>
          {averages.map(({ label, value }) => (
            <Average key={label} label={label} value={value} />
          ))}
        </AveragesHeaderWrapper>
      </Col>
    </Row>
  );
};

export default Averages;
