import { Schema, model } from 'mongoose'
import { IMetricData, IUserMetric, IUserMetrics } from '@/contracts'
export const metricDataSchema = new Schema<IMetricData>({
  timestamp: { type: Date, required: true },
  value: { type: Number, required: true }
})

const metricTypeSchema = new Schema<IUserMetric>({
  id: {
    type: String,
    enum: ['steps', 'maxRate', 'calories'],
    required: true
  },
  list: [metricDataSchema]
})

const metricsSchema = new Schema<IUserMetrics>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  metrics: {
    steps: metricTypeSchema,
    maxRate: metricTypeSchema,
    calories: metricTypeSchema
  }
})

const UserMetrics = model<IUserMetrics>('UserMetrics', metricsSchema)

export { UserMetrics }
