import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { IScheduling } from '../../dtos';

import Scheduling from '../../models/Scheduling';

class SchedulingController {
  async store(req: Request, res: Response): Promise<Response> {
    const {
      name_user,
      name_provider,
      name_service,
      scheduled_date,
      appointment,
      observation,
    } = req.body;

    const newScheduling = await Scheduling.create({
      id: uuidv4(),
      name_user,
      name_provider,
      name_service,
      scheduled_date,
      appointment,
      observation,
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

    await Scheduling.findByIdAndUpdate(id, req.body);

    return res.json({
      message: 'Scheduling updated successfully',
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
