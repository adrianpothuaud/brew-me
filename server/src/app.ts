import express from 'express';

import initMiddlewares from './middlewares';
import initRoutes from './routes';

const app = express();

initMiddlewares(app)
initRoutes(app)

export default app