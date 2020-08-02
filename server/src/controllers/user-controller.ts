import { Request, Response } from 'express';
import * as userService from '../services/user-service';
import { handleResponseError } from '../utils/handleResponseError';

export const listUsers = async (_: Request, res: Response) => {
  try {
    res.send(await userService.list());
  } catch (e) {
    handleResponseError(res, e);
  }
};

export const showUser = async (req: Request, res: Response) => {
  try {
    res.send(await userService.show(req.params.id));
  } catch (e) {
    handleResponseError(res, e);
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    res.send(await userService.create(req.body));
  } catch (e) {
    handleResponseError(res, e);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    res.send(await userService.update(req.params.id, req.body));
  } catch (e) {
    handleResponseError(res, e);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    res.send(await userService.remove(req.params.id));
  } catch (e) {
    handleResponseError(res, e);
  }
};
