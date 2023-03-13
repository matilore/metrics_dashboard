// @ts-nocheck
import { formatMetricId, parseMetrics, convertDateFormat } from "@helpers";

interface UserMetricsResponse {
  calories: [];
  maxRate: [];
  steps: [];
}

interface Average {
  label: string;
  value: number;
}

interface Metric {
  metricId: string;
  labels: [];
  dataSeries: [];
}

class UserMetricsModel {
  constructor(metrics: UserMetricsResponse) {
    this.data = metrics || {};
  }

  get averages() {
    const averages = Object.values(this.data).map(({ id, list }) => {
      const average =
        list.reduce((a: number, b: number) => a + b.value, 0) / list.length;
      const label = formatMetricId(id);
      return { label, value: Math.round(average) };
    });
    return averages as Average[];
  }

  get calories() {
    return parseMetrics(this.data.calories) as Metric;
  }

  get steps() {
    return parseMetrics(this.data.steps) as Metric;
  }

  get maxRate() {
    return parseMetrics(this.data.maxRate) as Metric;
  }

  get isEmpty() {
    return !Object.keys(this.data).length;
  }

  toJSON() {
    return {
      isEmpty: this.isEmpty,
      averages: this.averages,
      calories: this.calories,
      steps: this.steps,
      maxRate: this.maxRate,
    };
  }
}

export default UserMetricsModel;
