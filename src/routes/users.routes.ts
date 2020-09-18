import { Router } from 'express';

import UserController from '../controllers/Users/UserController';

const usersRouter = Router();

usersRouter.post('/', UserController.store);
usersRouter.get('/', UserController.read);
usersRouter.delete('/:id', UserController.delete);
usersRouter.put('/:id', UserController.update);
usersRouter.get('/:id', UserController.show);

export default usersRouter;
