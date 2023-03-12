import { Document, ObjectId } from 'mongoose'

export interface IMetricData extends Document {
  timestamp: Date
  value: number
}

export interface IUserMetric extends Document {
  id: string
  list: { timestamp: Date; value: number }[]
}

export interface IUserMetrics extends Document {
  userId: ObjectId
  metrics: {
    [key: string]: IUserMetric
  }
}

export interface IUserMetricsParams {
  metrics: {
    [key: string]: {
      id: string
      list: { timestamp: Date; value: number }[]
    }
  }
  email?: string
}

export interface IUserMetricParams {
  metric: { id: string; value: number }
  email?: string
}
