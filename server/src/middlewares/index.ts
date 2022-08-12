import express, { Express } from 'express'

import { clientPath } from '../constants'

const initMiddlewares = (app: Express): void => {
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use((req, res, next) => {
    console.log('recevied new request', req.method, req.path)
    next()
  })
  app.use(express.static(clientPath))
}

export default initMiddlewares
