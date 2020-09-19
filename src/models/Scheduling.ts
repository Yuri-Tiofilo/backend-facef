import { model, Schema } from 'mongoose';

import { IScheduling } from '../dtos';

const schedulingSchema = new Schema({
  id: { type: String, required: true },
  name_user: { type: String, required: true },
  name_provider: { type: String, required: true },
  name_service: { type: String, required: true },
  scheduled_date: { type: String, required: true },
  appointment: { type: String, required: true },
  obsertation: { type: String, required: true },
  canceled: { type: Boolean, required: false },
});

export default model<IScheduling>('Files', schedulingSchema);
