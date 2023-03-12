import { Request, Response, NextFunction } from 'express'

export const prefixMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('prefix being called')
  req.url = `/api/v1${req.url}`
  next()
}
