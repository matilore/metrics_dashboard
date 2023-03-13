import styled from "styled-components";

export const AverageWrapper = styled.div`
  width: 30%;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.COLORS.LAPIS_LAZULI};
  padding: 16px;
  p:hover {
    cursor: default;
  }
`;

export const LargeText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_LARGE};
  font-weight: bold;
`;
