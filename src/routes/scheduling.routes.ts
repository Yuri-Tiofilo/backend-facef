import { Router } from 'express';

import SchedulingController from '../controllers/SchedulingController/SchedulingController';

const schedulingRouter = Router();

schedulingRouter.post('/', SchedulingController.store);
schedulingRouter.get('/', SchedulingController.index);
schedulingRouter.delete('/:id', SchedulingController.delete);
schedulingRouter.put('/:id', SchedulingController.update);
schedulingRouter.get('/:id', SchedulingController.show);

export default schedulingRouter;
