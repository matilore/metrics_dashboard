import { Response, Request } from 'express'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { IUserMetrics, IMetricData } from '@/contracts'
import { formatUserMetricsResponse } from '@/controllers/helpers'

import { userMetricsService } from '@/services'

export const userMetricsController = {
  getMetrics: async (req: Request, res: Response) => {
    try {
      const metrics: IUserMetrics | null = await userMetricsService.getMetrics()

      if (!metrics) {
        return res.status(404).json({ error: 'User metrics not found' })
      }

      const userMetricsResponse = formatUserMetricsResponse(metrics)
      const timestamp = res.locals.timestamp

      return res.status(StatusCodes.OK).json({
        message: ReasonPhrases.OK,
        status: StatusCodes.OK,
        timestamp,
        response: userMetricsResponse
      })
    } catch {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },

  postMetrics: async (req: Request, res: Response) => {
    const { id, value }: IMetricData = req.body

    try {
      const updatedMetrics = await userMetricsService.addMetric({
        metric: { id, value }
      })

      const timestamp = res.locals.timestamp
      return res.status(StatusCodes.CREATED).json({
        message: ReasonPhrases.CREATED,
        status: StatusCodes.CREATED,
        timestamp,
        response: updatedMetrics
      })
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
