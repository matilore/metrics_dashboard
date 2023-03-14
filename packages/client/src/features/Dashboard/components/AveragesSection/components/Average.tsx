import React from 'react'
import { AverageProps } from '../contracts'
import { AverageWrapper, LargeText } from '../styleComponents'

const Average = ({ label, value }: AverageProps) => {
  return (
    <AverageWrapper>
      <b>{label} average</b>
      <LargeText>{value}</LargeText>
    </AverageWrapper>
  )
}

export default Average
