import { Express } from 'express'

import * as brewersController from '../controllers/brewers'

export default function initBrewersRoutes(app: Express): void {
  app.post('/api/brewers', brewersController.create)
  app.get('/api/brewers', brewersController.list)
}
