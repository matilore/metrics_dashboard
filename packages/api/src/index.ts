import express, { Express } from 'express'
import 'dotenv/config'

import { mongoose } from '@/dataSources'
import {
  corsMiddleware,
  notFoundMiddleware,
  attachTimestamps
} from '@/middlewares'
import { router } from '@/routes'

mongoose.run()

const app: Express = express()

app.use(
  express.json({ limit: '10mb' }),
  express.urlencoded({ limit: '10mb', extended: true }),
  corsMiddleware,
  attachTimestamps
)

app.use('/api/v1', router)
app.use(notFoundMiddleware)

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running at port ${process.env.APP_PORT}`)
})
