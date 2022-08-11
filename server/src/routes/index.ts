import path from 'path'

import { Express } from 'express'

import { clientPath } from '../constants'

const initRoutes = (app: Express): void => {
  app.get('/api/test', (req, res) => {
    res.send({ foo: 'bar' })
  })

  app.get('/*', (_req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'))
  })
}

export default initRoutes
