import { Document } from 'mongoose';

export interface IProvider extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  description?: string;
  opening_hours: Date;
  permission: string;
  score: string;
  cnpj?: string;
  cpf?: string;
  cellphone: string;
}
