import { Request, Response, NextFunction } from 'express'

export const attachTimestamps = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timestamp = new Date().toISOString()
  res.locals.timestamp = timestamp
  next()
}
