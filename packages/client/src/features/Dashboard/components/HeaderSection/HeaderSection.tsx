import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import ModalBody from '@common/Modal'
import { RequiredMetricsInputs } from '@features/Dashboard/contracts'

import { StyledHeader, DashboardHeaderWrapper, Button } from './styleComponents'

interface HeaderSectionProps {
  toggleModal: () => void
  isModalOpen: boolean
  postNewMetric: ({ metricId, metricValue }: RequiredMetricsInputs) => void
}

const HeaderSection = ({
  toggleModal,
  isModalOpen,
  postNewMetric
}: HeaderSectionProps) => {
  return (
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
  )
}

export default HeaderSection
