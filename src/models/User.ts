import { model, Schema } from 'mongoose';

import { IRegisterUser } from '../dtos';

const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: false },
  cpf: { type: String, required: false },
});

export default model<IRegisterUser>('User', UserSchema);
