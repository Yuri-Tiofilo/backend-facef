import { Document } from 'mongoose';

export interface IFiles extends Document {
  id_arquivo: string;
  id_prestador: string;
  way: string;
  name: string;
  extension: string;
}
