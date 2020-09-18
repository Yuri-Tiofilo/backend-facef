import { Router } from 'express';

import ServiceController from '../controllers/servicesController/ServiceController';

const serviceRouter = Router();

serviceRouter.post('/', ServiceController.store);
serviceRouter.get('/', ServiceController.index);
serviceRouter.delete('/:id', ServiceController.delete);
serviceRouter.put('/:id', ServiceController.update);
serviceRouter.get('/:id', ServiceController.show);

export default serviceRouter;
