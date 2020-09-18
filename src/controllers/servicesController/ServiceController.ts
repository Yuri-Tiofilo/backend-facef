import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Service from '../../models/Service';

import { IServices } from '../../dtos';

class ServiceController {
  async store(req: Request, res: Response): Promise<Response> {
    const { name_service, description, duraction, value } = req.body;

    const nameExist = await Service.findOne({
      name_service,
    });

    if (nameExist) {
      return res.status(401).json({ message: 'Service exists in database' });
    }

    const newService = await Service.create({
      id: uuidv4(),
      name_service,
      description,
      duraction,
      value,
    } as IServices);

    return res.json(newService);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const service = await Service.findOne({
      id,
    });

    if (service) {
      await Service.deleteOne({
        id,
      });
      return res.json({ message: 'Deleted service from database' });
    }

    return res.status(401).json({ message: 'Service not exist' });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { name } = req.body;

    const serviceExist = await Service.findOne({
      name,
    });

    if (serviceExist) {
      return res.status(400).json({ error: 'Service exist try other' });
    }

    const updateService = Service.findByIdAndUpdate(id, req.body);

    return res.json({
      message: 'service atualizado',
      user: updateService,
    });
  }

  async index(req: Request, res: Response): Promise<Response> {
    const services = await Service.find();

    return res.json(services);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const service = await Service.findOne({
      id,
    });

    return res.json(service);
  }
}

export default new ServiceController();
