import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { config as configEnvironment } from 'dotenv';
import cors from 'cors';

import connect from './connect';
import * as UserController from './controllers/user-controller';
import { createUserValidations, updateUserValidations } from './validation/userValidatiors';
import { handleValidationErrors } from '../dist/server/src/middlewares/handleValidationErrors';
import { resourceIdValidator } from './validation/resourceIdValidator';
import path from 'path';

configEnvironment();

const app: Application = express();
const port: number = +(process.env.PORT || 5000);

console.log('Connecting to DB ' + process.env.DB);
connect(process.env.DB || 'elephantstock');

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve( '../dist/elephantstock')));

app.get('/api/users', UserController.listUsers);
app.get('/api/users/:id', UserController.showUser);
app.post('/api/users', [...createUserValidations, handleValidationErrors], UserController.addUser);
app.patch(
  '/api/users/:id',
  [resourceIdValidator('User'), ...updateUserValidations, handleValidationErrors],
  UserController.updateUser
);
app.delete('/api/users/:id', [resourceIdValidator('User'), handleValidationErrors], UserController.deleteUser);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('../dist/elephantstock/index.html'));
});
