export type MetricsInputs = {
  metric_id: MetricIds | undefined;
  metric_value: number | undefined;
};

export enum MetricIds {
  calories = "calories",
  max_rate = "max_rate",
  steps = "steps",
}
