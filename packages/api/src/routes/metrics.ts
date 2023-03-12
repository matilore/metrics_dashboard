import { Router } from 'express'
import { userMetricsController } from '@/controllers'

export const metrics = (router: Router): void => {
  router.get('/metrics', userMetricsController.getMetrics)
  router.post('/metrics/new', userMetricsController.postMetrics)
}
