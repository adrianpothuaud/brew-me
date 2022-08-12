import { ApplicationError } from '@brew-me/error'
import { Brewer, Client, createNewBrewer, createNewClient, findBrewerByUsername, findClientByUsername, generateUserJWT } from '@brew-me/services'
import { NextFunction, Response, Request } from 'express'
import _ from 'lodash'

import errorHandler from '../error/errorHandler'

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    if (!req.body.role) throw new ApplicationError(400, 'bad_request', 'role is missing')
    if (!req.body.username) throw new ApplicationError(400, 'bad_request', 'username is missing')
    if (!req.body.password) throw new ApplicationError(400, 'bad_request', 'password is missing')
    let user: Omit<Brewer, 'hash'> | Omit<Client, 'hash'>
    if (req.body.role.toLowerCase() === 'brewer') {
      user = await findBrewerByUsername(req.body.username)
    } else if (req.body.role.toLowerCase() === 'client') {
      user = await findClientByUsername(req.body.username)
    } else throw new ApplicationError(400, 'bad_request', 'role should be one of \'brewer\', \'client\'')
    if (!user) throw new ApplicationError(404, 'not_found', 'username not exist')
    const token = generateUserJWT(user, req.body.role)
    res.status(200).json({
      token,
    })
  } catch (e) {
    errorHandler(e, res)
  }
}

export async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    if (!req.body.role) throw new ApplicationError(400, 'bad_request', 'role is missing')
    if (req.body.role.toLowerCase() === 'brewer') {
      const newBrewer = await createNewBrewer(req.body)
      const token = generateUserJWT(_.omit(newBrewer, 'hash'), req.body.role)
      res.status(201).json({ user: newBrewer, token })
    } else if (req.body.role.toLowerCase() === 'client') {
      const newClient = await createNewClient(req.body)
      const token = generateUserJWT(_.omit(newClient, 'hash'), req.body.role)
      res.status(201).json({ user: newClient, token })
    } else throw new ApplicationError(400, 'bad_request', 'role should be one of \'brewer\', \'client\'')
  } catch (e) {
    errorHandler(e, res)
  }
}
