import { IUserMetrics, IUserMetric } from '@/contracts'

export interface IFormattedMetricData {
  timestamp: string
  value: number
}

export interface IFormattedUserMetric {
  id: string
  list: IFormattedMetricData[]
}

export interface IFormattedUserMetrics {
  userId: string
  metrics: {
    steps: IFormattedUserMetric
    maxRate: IFormattedUserMetric
    calories: IFormattedUserMetric
  }
}

export function formatUserMetricsResponse({
  userId,
  metrics
}: IUserMetrics): IFormattedUserMetrics {
  const formattedMetrics: IFormattedUserMetrics = {
    userId: userId.toString(),
    metrics: {
      steps: formatUserMetric(metrics.steps.toObject()),
      maxRate: formatUserMetric(metrics.maxRate.toObject()),
      calories: formatUserMetric(metrics.calories.toObject())
    }
  }

  return formattedMetrics
}

function formatUserMetric(userMetric: IUserMetric): IFormattedUserMetric {
  const formattedUserMetric: IFormattedUserMetric = {
    id: userMetric.id,
    list: userMetric.list.map(formatMetricData)
  }
  return formattedUserMetric
}

function formatMetricData(metricData: {
  timestamp: Date
  value: number
}): IFormattedMetricData {
  const formattedMetricData: IFormattedMetricData = {
    timestamp: metricData.timestamp.toISOString(),
    value: metricData.value
  }
  return formattedMetricData
}
