export type MetricsInputs = {
  metricId: MetricIds | undefined
  metricValue: number | undefined
}

export enum MetricIds {
  calories = 'calories',
  maxRate = 'maxRate',
  steps = 'steps'
}
