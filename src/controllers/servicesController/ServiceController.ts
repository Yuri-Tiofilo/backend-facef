import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Service from '../../models/Service';

import { IServices } from '../../dtos';

// name_service: string;
// description: string;
// duraction: number;
// value: string;
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

  async delete(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async index(req: Request, res: Response) {}
}

export default new ServiceController();
