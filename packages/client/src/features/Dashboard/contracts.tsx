export enum MetricIds {
  calories = 'calories',
  maxRate = 'maxRate',
  steps = 'steps'
}
export type RequiredMetricsInputs = {
  metricId: MetricIds
  metricValue: number
}

export interface MetricsListResponse {
  [key: string]: any
  averages: { label: string; value: number }[]
  calories: {}
  maxRate: {}
  steps: {}
  isEmpty: boolean
}
