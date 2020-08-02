import User, { UserInterface } from '../models/User';
import { UserDTO } from '../dto/UserDTO';
import { IUser } from '../../../shared/interfaces/IUser';
import { UpdateUserDTO } from '../dto/UpdateUserDTO';
import { Role } from '../../../shared/enums/Role';

export const list = async () => {
  return new Promise((res, rej) => {
    User.find((err: any, users: UserInterface[]) => {
      if (err) {
        rej(err);
      } else {
        res(users.map((u) => new UserDTO(u)));
      }
    });
  });
};

export const show = (userId: string) => {
  return new Promise((res, rej) => {
    User.findById(userId, (err: any, user: UserInterface) => {
      if (err) {
        rej(err);
      } else if (!user) {
        rej(new Error('User Not Found!'));
      } else {
        res(new UserDTO(user));
      }
    });
  });
};

export const create = async (user: IUser) => {
  return new Promise(async (res, rej) => {
    const artManager = await User.findOne({ role: Role.ArtManager });
    if (!!artManager) {
      rej(new Error(`User with role ${Role.ArtManager} already exists!`));
    }

    User.create(user, (err: any, u: unknown | UserInterface) => {
      if (err) {
        if (err.message.includes('E11000')) {
          rej(new Error(`User with email address ${user.email} already exists!`));
        }
        rej(err);
      } else if (!u) {
        rej(new Error('Something went wrong while creating user'));
      } else {
        return res(new UserDTO(u as UserInterface));
      }
    });
  });
};

export const update = async (id: string, user: IUser) => {
  return new Promise(async (res, rej) => {
    const artManager = await User.findOne({ role: Role.ArtManager });
    if (artManager && artManager._id.toString() !== id) {
      rej(new Error(`User with role ${Role.ArtManager} already exists!`));
    }

    User.findByIdAndUpdate(id, new UpdateUserDTO(user), { new: true }, (err: any, u: unknown | UserInterface) => {
      if (err) {
        rej(err);
      } else if (!u) {
        rej(new Error('Something went wrong while updating user'));
      } else {
        return res(new UserDTO(u as UserInterface));
      }
    });
  });
};

export const remove = async (id: string) => {
  return new Promise((res, rej) => {
    User.findByIdAndDelete(id, (err: any, u: unknown | UserInterface) => {
      if (err) {
        rej(err);
      } else {
        return res(u);
      }
    });
  });
};
