import { createNewBrewer, listBrewers } from '@brew-me/services'
import { NextFunction, Response, Request } from 'express'

import errorHandler from '../error/errorHandler'

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const newBrewer = await createNewBrewer(req.body)
    res.status(201).json(newBrewer)
  } catch (e) {
    errorHandler(e, res)
  }
}

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
  console.log('list brewers controller start')
  try {
    const brewers = await listBrewers()
    res.status(200).json(brewers)
  } catch (e) {
    errorHandler(e, res)
  }
}
