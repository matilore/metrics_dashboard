import { Router } from 'express'
import { userMetricsController } from '@/controllers'

export const metrics = (router: Router): void => {
  router.get('/metrics', userMetricsController.getMetrics)
  router.put('/metrics/update', userMetricsController.postMetrics)
}
