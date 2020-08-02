import {Role} from "../enums/Role";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  _id: string
}
