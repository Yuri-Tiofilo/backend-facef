import { model, Schema } from 'mongoose';

import { IRegisterUser } from '../dtos';

const UserSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  gender: String,
  cpf: String,
});

export default model<IRegisterUser>('User', UserSchema);
