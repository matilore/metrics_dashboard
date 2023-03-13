import React from 'react'
import MetricSelector from './MetricSelector'
import Chart from './Chart'

const ChartSection = () => {
  return (
    <>
      <h2>My metrics</h2>
      <p>Check your progress</p>
      <MetricSelector />
      <Chart />
    </>
  )
}

export default ChartSection
