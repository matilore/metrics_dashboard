import { User, UserMetrics } from '@/models'
import {
  IUserMetric,
  IUserMetrics,
  IUserMetricsParams,
  IUserMetricParams
} from '@/contracts'

export const userMetricsService = {
  createMetric: async ({ metrics, email }: IUserMetricsParams) => {
    try {
      const user = await User.findOne({ email: email || 'johndoe@example.com' })

      if (!user) {
        throw new Error('User not found')
      }

      const newMetricObject = {
        userId: user._id,
        metrics
      }

      const newMetric = new UserMetrics(newMetricObject)

      const metric = await newMetric.save()
      console.log('Metric created successfully:', metric)
    } catch (error) {
      console.error(error)
    }
  },

  addMetric: async ({ metric, email }: IUserMetricParams): Promise<void> => {
    try {
      const userMetrics = await UserMetrics.findOne({
        email: email || 'johndoe@example.com'
      })

      if (!userMetrics) {
        throw new Error('User not found')
      }

      const metricsToUpdate: IUserMetric = userMetrics.metrics[metric.id]

      if (!metricsToUpdate) {
        throw new Error(`Metric ${metric.id} not found`)
      }

      const newMetricData = {
        timestamp: new Date(),
        value: metric.value
      }

      metricsToUpdate.list.push(newMetricData)

      await userMetrics.save()
    } catch (error) {
      throw new Error(`Error creating metric: ${(error as Error).message}`)
    }
  },

  getMetrics: async (): Promise<IUserMetrics | null> => {
    try {
      const metrics = await UserMetrics.findOne({
        email: 'johndoe@example.com'
      })
      if (!metrics) {
        throw new Error('Metrics not found!')
      }

      return metrics
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}
