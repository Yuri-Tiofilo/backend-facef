import { Router } from 'express';

import usersRouter from './users.routes';
import serviceRouter from './services.routes';
import providerRouter from './provider.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/services', serviceRouter);
routes.use('/provider', providerRouter);

export default routes;
