import { Response, Request } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { IRegisterUser } from '../../dtos';

import User from '../../models/User';

class UserController {
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { email } = req.body;

    const emailExist = await User.findOne({
      email,
    });

    if (emailExist) {
      return res.status(400).json({ error: 'Email exist try other' });
    }

    const updateUser = User.findByIdAndUpdate(id, req.body);

    return res.json({
      message: 'User atualizado',
      user: updateUser,
    });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = await User.findOne({
      id,
    });

    if (user) {
      await User.deleteOne({
        id,
      });
      return res.json({ message: 'Deleted user from database' });
    }

    return res.status(401).json({ message: 'User not exist' });
  }

  async read(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { name, email, password, cpf, gender } = req.body;

    const userExist = await User.findOne({
      email,
    });

    if (userExist) {
      return res.status(401).json({ message: 'User exists in database' });
    }

    const newUser = await User.create({
      id: uuidv4(),
      name,
      email,
      password,
      cpf,
      gender,
    } as IRegisterUser);
    return res.json(newUser);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = await User.findOne({
      id,
    });

    return res.json(user);
  }
}

export default new UserController();
