import { Router } from 'express';
import UserController from './controllers/Users/UserController';
import SessionController from './controllers/auth/SessionController';

const routes = Router();

routes.post('/auth', SessionController.store);

routes.post('/users', UserController.store);
routes.get('/users', UserController.read);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

export default routes;
