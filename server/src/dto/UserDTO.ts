import { IUser } from '../../../shared/interfaces/IUser';
import { Role } from '../../../shared/enums/Role';

export class UserDTO implements Omit<IUser, '_id'> {
  readonly firstName: string = '';
  readonly lastName: string;
  readonly email: string;
  readonly role: Role;
  readonly id: string;

  constructor(user: IUser) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.role = user.role;
    this.id = user._id;
  }
}
