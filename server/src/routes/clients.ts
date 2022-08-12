import { Express } from 'express'

import * as clientsController from '../controllers/clients'

export default function initClientsRoutes(app: Express): void {
  app.post('/api/clients', clientsController.create)
  app.get('/api/clients', clientsController.list)
}
