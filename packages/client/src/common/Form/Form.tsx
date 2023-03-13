import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Wrapper,
  InputField,
  ButtonWrapper,
  StyledForm,
  Input,
  Select,
  Button,
} from "./styleComponents";
import { MetricsInputs, MetricIds } from "./contracts";

export default function Form({
  postNewMetric,
}: {
  postNewMetric: (data: any) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      metricId: undefined,
      metricValue: undefined,
    },
  });

  const onSubmit: SubmitHandler<MetricsInputs> = (data) => postNewMetric(data);

  return (
    <Wrapper>
      <h2>It's time to update your progresses</h2>
      <h3>Choose the metric and enter the relative data</h3>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputField>
          <label>Metric</label>
          <Select
            {...register("metricId", {
              required: "error message",
            })}
          >
            <option disabled selected>
              Select metric
            </option>
            <option value={MetricIds.calories}>Calories</option>
            <option value={MetricIds.maxRate}>Max Rate</option>
            <option value={MetricIds.steps}>Steps</option>
          </Select>
        </InputField>
        <InputField>
          <label>Metric value</label>

          <Input
            {...register("metricValue", {
              required: "error message",
            })}
            type="number"
            placeholder="metric value"
          />
        </InputField>
        <ButtonWrapper>
          <Button disabled={!isValid} type="submit">
            Submit
          </Button>
        </ButtonWrapper>
      </StyledForm>
    </Wrapper>
  );
}
