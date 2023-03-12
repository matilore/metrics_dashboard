import { Router } from 'express'

import { metrics } from './metrics'

const router: Router = Router()

const routes: {
  [key: string]: (router: Router) => void
} = { metrics }

for (const route in routes) {
  routes[route](router)
}

export { router }
