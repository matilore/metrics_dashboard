import styled from "styled-components";

export const RadioGroup = styled.div`
  display: flex;
  margin: 32px 0;
`;

export const RadioButton = styled.input`
  display: none;
  &:checked + label {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.MOONSTONE};
  }
`;

export const RadioButtonLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.EERIE_BLACK};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.COLORS.GREY};
  border-radius: 8px;
`;
