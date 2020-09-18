import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Files from '../../models/Files';

class FilesController {
  store(): void {
    console.log('veio aqui');
  }

  index(): void {
    console.log('veio aqui');
  }

  update(): void {
    console.log('veio aqui');
  }

  delete(): void {
    console.log('veio aqui');
  }
}

export default new FilesController();
