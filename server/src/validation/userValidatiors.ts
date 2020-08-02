import { body } from 'express-validator';
import { Role } from '../../../shared/enums/Role';

const roleValidator = (value: string) => {
  if (!(value in Role)) {
    throw new Error(`Role must be one of: ${Object.keys(Role).join(', ')}`);
  }

  return true;
};

const nameValidator = (label: string) => (value: string) => {
  if (!value) {
    throw new Error(`${label} is required!`);
  }
  if (value.trim().length < 2) {
    throw new Error(`${label} must be at least 2 characters long!`);
  }

  return true;
};

export const updateUserValidations = [
  body('firstName').custom(nameValidator('First Name')),
  body('lastName').custom(nameValidator('Last Name')),
  body('role').custom(roleValidator),
];

export const createUserValidations = [...updateUserValidations, body('email').isEmail()];
