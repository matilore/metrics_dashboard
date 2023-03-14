import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface MetricsResponse {
  metricId: string
  labels: string[]
  dataSeries: number[]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}

const Chart = ({ metricId, labels, dataSeries }: MetricsResponse) => {
  const data = {
    labels,
    datasets: [
      {
        label: metricId,
        data: dataSeries,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return <Line options={options} data={data} />
}

export default Chart
