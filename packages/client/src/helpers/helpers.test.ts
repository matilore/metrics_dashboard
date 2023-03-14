import {
  capitalizeFirstLetter,
  formatMetricId,
  parseMetrics,
  convertDateFormat,
  replaceCamelCaseWithSpace,
  MetricsData
} from './index'

describe('capitalizeFirstLetter', () => {
  it('capitalizes the first letter of a string', () => {
    const result = capitalizeFirstLetter('hello')
    expect(result).toBe('Hello')
  })
})

describe('replaceCamelCaseWithSpace', () => {
  it('replaces camelCase with spaces', () => {
    const result = replaceCamelCaseWithSpace('helloWorld')
    expect(result).toBe('Hello World')
  })
})

describe('formatMetricId', () => {
  it('formats a metric ID', () => {
    const result = formatMetricId('someMetricId')
    expect(result).toBe('Some Metric Id')
  })
})

describe('parseMetrics', () => {
  it('parses a metric object', () => {
    const metric = {
      id: 'someMetricId',
      list: [
        { timestamp: '2022-03-01T00:00:00.000Z', value: 10 },
        { timestamp: '2022-03-02T00:00:00.000Z', value: 20 }
      ]
    }
    const result = parseMetrics({
      id: 'someMetricId',
      list: [
        { timestamp: '2022-03-01T00:00:00.000Z', value: 10 },
        { timestamp: '2022-03-02T00:00:00.000Z', value: 20 }
      ]
    } as MetricsData)

    expect(result).toEqual({
      metricId: 'someMetricId',
      labels: ['01-03-2022', '02-03-2022'],
      dataSeries: [10, 20]
    })
  })
})

describe('convertDateFormat', () => {
  it('converts a date string to DD-MM-YYYY format', () => {
    const dateString = '2022-03-01T00:00:00.000Z'
    const result = convertDateFormat(dateString)
    expect(result).toBe('01-03-2022')
  })
})
