import { param } from 'express-validator';

export const resourceIdValidator = (label: string) =>
  param('id').custom((value: string) => {
    if (!value || value.length < 24) {
      throw new Error(`Param ${label} id must be present and valid`);
    }

    return true;
  });
