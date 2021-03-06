import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    // if (!(await user.checkPassword(password))) {
    //   return res.status(401).json({ error: 'Error when logging in' });
    // }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
