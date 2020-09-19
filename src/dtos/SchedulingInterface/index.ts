import { Document } from 'mongoose';

export interface IScheduling extends Document {
  id: string;
  name_user: string;
  name_provider: string;
  name_service: string;
  scheduled_date: string;
  appointment: string;
  obsertation: string;
  canceled: boolean;
}
