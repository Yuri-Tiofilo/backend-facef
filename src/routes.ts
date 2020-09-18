import { Router } from 'express';
import UserController from './controllers/Users/UserController';
import ProviderController from './controllers/Providers/ProviderController';
import SessionController from './controllers/auth/SessionController';
import ServiceController from './controllers/servicesController/ServiceController';
import SchedulingController from './controllers/SchedulingController/SchedulingController';

const routes = Router();

routes.post('/auth', SessionController.store);

// UserController
routes.post('/users', UserController.store);
routes.get('/users', UserController.read);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);
routes.get('/users/:id', UserController.show);

// ProviderController
routes.post('/provider', ProviderController.store);
routes.get('/provider', ProviderController.index);
routes.delete('/provider/:id', ProviderController.delete);
routes.put('/provider/:id', ProviderController.update);
routes.get('/provider/:id', ProviderController.show);

// services
routes.post('/services', ServiceController.store);
routes.get('/services', ServiceController.index);
routes.delete('/services/:id', ServiceController.delete);
routes.put('/services/:id', ServiceController.update);
routes.get('/services/:id', ServiceController.show);

routes.get('/scheduling', SchedulingController.index);

export default routes;
