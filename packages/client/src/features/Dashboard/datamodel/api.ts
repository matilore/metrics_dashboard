import axios from "@config/axios";
import UserMetricsModel from "./model";
import { RequiredMetricsInputs } from "@features/Dashboard/contracts";

interface UserMetricsModelInterface {
  averages: { label: string; value: number }[];
  calories: any;
  steps: any;
  maxRate: any;
  isEmpty: boolean;
}

export const getMetrics = async () => {
  const url = `/api/v1/metrics`;
  const {
    data: {
      response: { metrics },
    },
  } = await axios.get(url);

  const formattedMetricsResponse = new UserMetricsModel(metrics);
  const formattedJSON: UserMetricsModelInterface =
    formattedMetricsResponse.toJSON();
  return formattedJSON;
};

export const putMetrics = async ({
  metricId,
  metricValue,
}: RequiredMetricsInputs) => {
  const url = `/api/v1/metrics/update`;
  const {
    data: {
      response: { metrics },
    },
  } = await axios.put(url, {
    id: metricId,
    value: metricValue,
  });
  const formattedMetricsResponse = new UserMetricsModel(metrics);
  const formattedJSON: UserMetricsModelInterface =
    formattedMetricsResponse.toJSON();
  return formattedJSON;
};
