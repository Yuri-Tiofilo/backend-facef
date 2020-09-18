import { Router } from 'express';

import ProviderController from '../controllers/Providers/ProviderController';

const providerRouter = Router();

providerRouter.post('/', ProviderController.store);
providerRouter.get('/', ProviderController.index);
providerRouter.delete('/:id', ProviderController.delete);
providerRouter.put('/:id', ProviderController.update);
providerRouter.get('/:id', ProviderController.show);

export default providerRouter;
