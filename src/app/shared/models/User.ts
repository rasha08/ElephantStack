import { IUser } from '../../../../shared/interfaces/IUser';

export type User = Omit<IUser, '_id'> & { id: string };
