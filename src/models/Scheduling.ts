import { model, Schema } from 'mongoose';

import { IScheduling } from '../dtos';

const schedulingSchema = new Schema({
  id: { type: String, required: true },
  name_user: { type: String, required: false },
  name_provider: { type: String, required: false },
  name_service: { type: String, required: false },
  scheduled_date: { type: String, required: false },
  appointment: { type: String, required: false },
  observation: { type: String, required: false },
  canceled: { type: Boolean, required: false },
});

export default model<IScheduling>('Scheduling', schedulingSchema);
