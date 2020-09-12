import { Document } from 'mongoose';

export interface IAuth {
  email: string;
  password: string;
}

export interface IRegisterUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
}
