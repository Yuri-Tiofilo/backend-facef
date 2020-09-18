import { Document } from 'mongoose';

export interface IScheduling extends Document {
  id: string;
  id_user: string;
  id_provider: string;
  id_service: string;
  scheduled_date: string;
  appointment: string;
  description: string;
  canceled: string;
}
