import axios from "axios";
import UserMetricsModel from "./model";
import { RequiredMetricsInputs } from "@features/Dashboard/contracts";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

interface UserMetricsModelInterface {
  averages: { label: string; value: number }[];
  calories: any;
  steps: any;
  maxRate: any;
  isEmpty: boolean;
}

export const getMetrics = async () => {
  const url = `http://localhost:8000/api/v1/metrics`;
  const {
    data: {
      response: { metrics },
    },
  } = await axios.get(url);

  const formattedMetricsResponse = new UserMetricsModel(metrics);
  const formattedJSON: UserMetricsModelInterface =
    formattedMetricsResponse.toJSON();
  return formattedJSON;

  // const { API_URL } = process.env
  // return fetch(`${API_URL}/metrics`).then((res) => {
  //   console.log(res)
  //   return res
  // })
};

export const putMetrics = async ({
  metricId,
  metricValue,
}: RequiredMetricsInputs) => {
  const url = `http://localhost:8000/api/v1/metrics/update`;
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

  // const { API_URL } = process.env
  // return fetch(`${API_URL}/metrics`).then((res) => {
  //   console.log(res)
  //   return res
  // })
};
