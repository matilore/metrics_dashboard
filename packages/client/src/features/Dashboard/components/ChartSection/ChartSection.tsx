import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import MetricSelector from './components/MetricSelector'
import Chart from './components/Chart'

interface MetricsResponse {
  metricId: string
  labels: string[]
  dataSeries: number[]
}

interface ChartSectionProps {
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedOption: string
  metricsToDisplay: MetricsResponse
}

const ChartSection = ({
  handleOptionChange,
  selectedOption,
  metricsToDisplay: { metricId, labels, dataSeries }
}: ChartSectionProps) => {
  return (
    <Row>
      <Col offset={{ xs: 0, md: 1, lg: 0 }} xs={4} lg={12} md={6}>
        <h2>My metrics</h2>
        <p>Check your progress</p>
        <MetricSelector
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption || 'calories'}
        />
        <Chart metricId={metricId} labels={labels} dataSeries={dataSeries} />
      </Col>
    </Row>
  )
}

export default ChartSection
