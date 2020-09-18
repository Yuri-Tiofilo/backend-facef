import { model, Schema } from 'mongoose';

import { IFiles } from '../dtos';

const filesSchema = new Schema({
  id_arquivo: { type: String, required: true },
  id_prestador: { type: String, required: true },
  way: { type: String, required: true },
  name: { type: String, required: true },
  extension: { type: String, required: true },
});

export default model<IFiles>('Files', filesSchema);
