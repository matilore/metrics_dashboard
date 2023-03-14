import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import Averages from './AveragesSection'

const averagesMock = [
  { label: 'Label 1', value: 10 },
  { label: 'Label 2', value: 20 },
  { label: 'Label 3', value: 30 }
]

describe('Averages', () => {
  it('should render the averages with their respective labels and values', () => {
    render(
      <ThemeProvider theme={theme}>
        <Averages averages={averagesMock} />
      </ThemeProvider>
    )

    const label1 = screen.getByText('Label 1 average')
    const value1 = screen.getByText('10')
    const label2 = screen.getByText('Label 2 average')
    const value2 = screen.getByText('20')
    const label3 = screen.getByText('Label 3 average')
    const value3 = screen.getByText(30)

    expect(label1).toBeInTheDocument()
    expect(value1).toBeInTheDocument()
    expect(label2).toBeInTheDocument()
    expect(value2).toBeInTheDocument()
    expect(label3).toBeInTheDocument()
    expect(value3).toBeInTheDocument()
  })
})
