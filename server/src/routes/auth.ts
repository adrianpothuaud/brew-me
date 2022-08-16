import { Express } from 'express'

import * as authController from '../controllers/auth'

export default function initAuthRoutes(app: Express): void {
  app.post('/api/auth/login', authController.login)
  app.post('/api/auth/register', authController.register)
}
