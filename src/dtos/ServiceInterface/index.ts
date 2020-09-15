import { Document } from 'mongoose';

export interface IServices extends Document {
  id: string;
  name_service: string;
  description: string;
  duraction: number;
  value: string;
}
