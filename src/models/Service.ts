import { model, Schema } from 'mongoose';

import { IServices } from '../dtos';

const ServiceSchema = new Schema({
  id: { type: String, required: true },
  name_service: { type: String, required: true },
  description: { type: String, required: true },
  duraction: { type: Number, required: true },
  value: { type: String, required: true },
});

export default model<IServices>('Service', ServiceSchema);
