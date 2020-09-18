import { Router } from 'express';

import usersRouter from './users.routes';
import serviceRouter from './services.routes';
import providerRouter from './provider.routes';
import schedulingRouter from './scheduling.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/services', serviceRouter);
routes.use('/provider', providerRouter);
routes.use('/scheduling', schedulingRouter);

export default routes;
