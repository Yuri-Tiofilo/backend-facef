import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import Provider from '../../models/Provider';
import { IProvider } from '../../dtos';

class ProviderController {
  async store(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      cpf,
      cnpj,
      description,
      opening_hours,
      permission,
      score,
      cellphone,
    } = req.body;

    const providerExist = await Provider.findOne({
      email,
    });

    if (providerExist) {
      return res.status(401).json({ message: 'Email exists in database' });
    }
    const cpfExist = await Provider.findOne({
      cpf,
    });

    if (cpfExist) {
      return res.status(401).json({ message: 'CPF exists in database' });
    }

    if (cnpj) {
      const cnpjExist = await Provider.findOne({
        cnpj,
      });

      if (cnpjExist) {
        return res.status(401).json({ message: 'CNPJ exists in database' });
      }
      const newProvider = await Provider.create({
        id: uuidv4(),
        name,
        email,
        password,
        cnpj,
        description,
        opening_hours,
        permission,
        score,
        cellphone,
      } as IProvider);

      return res.json(newProvider);
    }

    const newProvider = await Provider.create({
      id: uuidv4(),
      name,
      email,
      password,
      cpf,
      description,
      opening_hours,
      permission,
      score,
      cellphone,
    } as IProvider);

    return res.json(newProvider);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const provider = await Provider.findOne({
      id,
    });

    if (provider) {
      await Provider.deleteOne({
        id,
      });

      return res.json({ message: 'Deleted provider from database' });
    }

    return res.status(401).json({ message: 'Provider not exist' });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { email } = req.body;

    const emailExist = await Provider.findOne({
      email,
    });

    if (emailExist) {
      return res.status(400).json({ error: 'Email exist try other' });
    }

    const updateProvider = Provider.findByIdAndUpdate(id, req.body);

    return res.json({
      message: 'User atualizado',
      user: updateProvider,
    });
  }

  async index(req: Request, res: Response): Promise<Response> {
    const providers = await Provider.find();

    return res.json(providers);
  }
}

export default new ProviderController();
