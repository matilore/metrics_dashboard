import React from 'react'
import styled from 'styled-components'

const AverageWrapper = styled.div`
  width: 30%;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.COLORS.LAPIS_LAZULI};
  padding: 16px;
  p:hover {
    cursor: default;
  }
`

const LargeText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_LARGE};
  font-weight: bold;
`

interface AverageProps {
  id: string
  value: number
}

const Average = ({ id, value }: AverageProps) => {
  return (
    <AverageWrapper>
      <p>{id}</p>
      <LargeText>{value}</LargeText>
    </AverageWrapper>
  )
}

interface AveragesProps {
  averages: AverageProps[]
}

const Averages = ({ averages }: AveragesProps) => {
  return (
    <>
      {averages.map(({ id, value }) => (
        <Average id={id} value={value} />
      ))}
    </>
  )
}

export default Averages
