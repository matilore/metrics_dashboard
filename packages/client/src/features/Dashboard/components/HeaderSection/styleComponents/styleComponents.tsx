import styled from 'styled-components'

export const StyledHeader = styled.h1`
  width: 100%;
`

export const DashboardHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 160px;
  height: 50px;
  left: 1013px;
  top: 118px;
  background: ${({ theme }) => theme.COLORS.MOONSTONE};
  border-radius: 8px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM};
  cursor: pointer;
  border: none;
`
