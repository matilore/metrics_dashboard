export declare global {
  namespace Express {
    interface Request {
      context: Context
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number
      APP_URL: string
      CLIENT_URL: string
      MONGODB_URI: string
    }
  }
}
