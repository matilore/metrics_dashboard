import styled from "styled-components";
import { IsDisabledProps } from "./contracts";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.div`
  margin: 16px 0;
  width: 100%;

  label {
    display: inline-block;
    font-size: 0.9em;
    margin: 8px 0;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  margin-top: 24px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  display: inline-block;
  height: 35px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  padding: 8px;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  box-sizing: border-box;

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

export const Button = styled.button<IsDisabledProps>`
  border-radius: 5px;
  height: 35px;
  box-sizing: border-box;
  width: 80%;
  padding: 4px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.COLORS.POWDER_BLUE};
  border: none;
  opacity: ${({ disabled }) => {
    return disabled ? "0.5" : "1";
  }};
`;
