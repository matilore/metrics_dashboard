import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import { createDateMinusDaysFromNow } from '../utils/dates'
import { userService } from '../services/userService'
import { userMetricsService } from '../services/userMetricsService'

const seedUserMetrics = {
  steps: {
    id: 'steps',
    list: [
      { timestamp: createDateMinusDaysFromNow(1), value: 10000 },
      { timestamp: createDateMinusDaysFromNow(2), value: 9000 },
      { timestamp: createDateMinusDaysFromNow(3), value: 10500 }
    ]
  },
  max_rate: {
    id: 'max_rate',
    list: [
      { timestamp: createDateMinusDaysFromNow(1), value: 140 },
      { timestamp: createDateMinusDaysFromNow(2), value: 135 },
      { timestamp: createDateMinusDaysFromNow(3), value: 120 }
    ]
  },
  calories: {
    id: 'calories',
    list: [
      { timestamp: createDateMinusDaysFromNow(1), value: 2500 },
      { timestamp: createDateMinusDaysFromNow(2), value: 200 },
      { timestamp: createDateMinusDaysFromNow(3), value: 3000 }
    ]
  }
}

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
  await userService.createUser('johndoe@example.com')
  await userMetricsService.createMetric({
    email: 'johndoe@example.com',
    metrics: seedUserMetrics
  })
  mongoose.connection.close()
}

seed()
