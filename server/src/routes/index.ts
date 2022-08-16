import path from 'path'

import { Express } from 'express'

import { clientPath } from '../constants'
import initAuthRoutes from './auth'
import initBrewersRoutes from './brewers'

const initRoutes = (app: Express): void => {
  app.get('/api/test', (req, res) => {
    res.send({ foo: 'bar' })
  })

  initAuthRoutes(app)
  initBrewersRoutes(app)

  app.get('/*', (_req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'))
  })
}

export default initRoutes
