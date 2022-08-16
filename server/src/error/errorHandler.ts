import { ApplicationError } from '@brew-me/error'
import { Response } from 'express'

export default function errorHandler(e: any, res: Response): void {
  console.log('error handler start', e)
  if (Object.getPrototypeOf(e) === ApplicationError.prototype) {
    res.status(e.statusCode).json({ code: e.errorCode, details: e.errorDetails })
  } else {
    res.status(500).json(JSON.stringify(e))
  }
}
