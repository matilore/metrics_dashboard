import axios from "axios";
import { MetricsInputs } from "@common/Form/contracts";

type RequiredMetricsInputs = Required<MetricsInputs>;

export const getMetrics = async () => {
  const url = `http://localhost:8000/api/metrics`;
  const metrics = await axios.get(url);
  console.log("metrics", metrics);
  return metrics;

  // const { API_URL } = process.env
  // return fetch(`${API_URL}/metrics`).then((res) => {
  //   console.log(res)
  //   return res
  // })
};

export const putMetrics = async ({
  metric_id,
  metric_value,
}: RequiredMetricsInputs) => {
  const url = `http://localhost:8000/api/metrics`;
  const metrics = await axios.put(url, { metric_id, metric_value });
  console.log("metrics", metrics);
  return metrics;

  // const { API_URL } = process.env
  // return fetch(`${API_URL}/metrics`).then((res) => {
  //   console.log(res)
  //   return res
  // })
};
