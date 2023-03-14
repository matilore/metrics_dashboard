export interface MetricsData {
  id: string
  list: ListData[]
}

interface ListData {
  timestamp: string
  value: number
}

export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const replaceCamelCaseWithSpace = (metricId: string): string => {
  return metricId
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
}

export const formatMetricId = (id: string) =>
  capitalizeFirstLetter(replaceCamelCaseWithSpace(id))

export const parseMetrics = (metric: MetricsData) => {
  return {
    metricId: metric.id,
    labels: metric.list.map(({ timestamp }: { timestamp: string }) =>
      convertDateFormat(timestamp)
    ),
    dataSeries: metric.list.map(({ value }: { value: number }) => value)
  }
}

export const convertDateFormat = (dateString: string): string => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const formattedDate = `${day.toString().padStart(2, '0')}-${month
    .toString()
    .padStart(2, '0')}-${year}`
  return formattedDate
}
