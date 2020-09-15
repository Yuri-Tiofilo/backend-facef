import { model, Schema } from 'mongoose';

import { IProvider } from '../dtos';

const ProviderSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  description: { type: String, required: false },
  opening_hours: { type: String, required: false },
  permission: { type: String, required: false },
  score: { type: String, required: false },
  cnpj: { type: String, required: false },
  cpf: { type: String, required: false },
});

export default model<IProvider>('Provider', ProviderSchema);
