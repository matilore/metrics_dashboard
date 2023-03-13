import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { COLORS } from "@styles/constants";
import { MetricsInputs, MetricIds } from "./contracts";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const InputField = styled.div`
  margin: 16px;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  display: inline-block;
  height: 35px;
  width: calc(100% - 16px);
  box-sizing: border-box;
  font-size: 14px;
  padding: 8px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  width: calc(100% - 16px);

  background: white;
  color: black;
  padding: 4px;
  font-size: 14px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

interface IsDisabledProps {
  readonly disabled: boolean;
}

const Button = styled.button<IsDisabledProps>`
  display: inline-block;
  border-radius: 5px;
  height: 35px;
  box-sizing: border-box;
  width: calc(100% - 24px);
  padding: 4px;
  font-size: 14px;
  background-color: ${COLORS.POWDER_BLUE};
  border: none;
  opacity: ${({ disabled }) => {
    return disabled ? "0.5" : "1";
  }};
`;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      metric_id: undefined,
      metric_value: undefined,
    },
  });

  const onSubmit: SubmitHandler<MetricsInputs> = (data) => console.log(data);

  return (
    <Wrapper>
      <h2>It's time to update your progresses</h2>
      <h3>Choose the metric and enter the relative data</h3>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputField>
          <label>Metric</label>
          <Select
            {...register("metric_id", {
              required: "error message", // JS only: <p>error message</p> TS only support string
            })}
          >
            <option disabled selected>
              Select metric
            </option>
            <option value={MetricIds.calories}>Calories</option>
            <option value={MetricIds.max_rate}>Max Rate</option>
            <option value={MetricIds.steps}>Steps</option>
          </Select>
        </InputField>

        {/* register your input into the hook by invoking the "register" function */}
        <InputField>
          <label>Metric value</label>

          <Input
            {...register("metric_value", {
              required: "error message",
            })}
            type="number"
            placeholder="metric value"
          />
          {/* errors will return when field validation fails  */}
          {errors.metric_value && <span>This field is required</span>}
        </InputField>

        <Button disabled={!isValid} type="submit">
          Submit
        </Button>
      </StyledForm>
    </Wrapper>
  );
}
