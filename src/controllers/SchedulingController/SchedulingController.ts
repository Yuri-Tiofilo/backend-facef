import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { IScheduling } from '../../dtos';

import Scheduling from '../../models/Scheduling';

class SchedulingController {
  async store(req: Request, res: Response): Promise<Response> {
    const {
      id_user,
      id_provider,
      id_service,
      scheduled_date,
      appointment,
      description,
    } = req.body;

    const newScheduling = await Scheduling.create({
      id: uuidv4(),
      id_user,
      id_provider,
      id_service,
      scheduled_date,
      appointment,
      description,
      canceled: false,
    } as IScheduling);

    return res.json(newScheduling);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const schedulings = await Scheduling.find();

    return res.json(schedulings);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const updateService = Scheduling.findByIdAndUpdate(id, req.body);

    return res.json({
      message: 'Scheduling atualizado',
      user: updateService,
    });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const service = await Scheduling.findOne({
      id,
    });

    if (service) {
      await Scheduling.deleteOne({
        id,
      });
      return res.json({ message: 'Deleted service from database' });
    }

    return res.status(401).json({ message: 'Service not exist' });
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const scheduling = await Scheduling.findOne({
      id,
    });

    return res.json(scheduling);
  }
}

export default new SchedulingController();
