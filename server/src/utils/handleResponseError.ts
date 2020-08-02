import { Response } from 'express';

export const handleResponseError = (res: Response, e: Error) => {
  res.status(400);
  res.send({ message: e.message });
};
