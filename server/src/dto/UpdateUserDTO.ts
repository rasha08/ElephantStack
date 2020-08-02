import { IUser } from '../../../shared/interfaces/IUser';
import { Role } from '../../../shared/enums/Role';

export class UpdateUserDTO implements Partial<IUser> {
  readonly firstName: string = '';
  readonly lastName: string;
  readonly role: Role;

  constructor(user: IUser) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
  }
}
