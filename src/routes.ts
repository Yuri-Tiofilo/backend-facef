import { Router } from 'express';
import UserController from './controllers/Users/UserController';

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.read);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

export default routes;
