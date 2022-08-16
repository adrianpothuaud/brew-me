import { createNewClient, listClients } from '@brew-me/services'
import { NextFunction, Response, Request } from 'express'

import errorHandler from '../error/errorHandler'

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const newClient = await createNewClient(req.body)
    res.status(201).json(newClient)
  } catch (e) {
    errorHandler(e, res)
  }
}

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
  console.log('list clients controller start')
  try {
    const clients = await listClients()
    res.status(200).json(clients)
  } catch (e) {
    errorHandler(e, res)
  }
}
