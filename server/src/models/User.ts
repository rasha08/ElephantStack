import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../../../shared/interfaces/IUser';
import { Role } from '../../../shared/enums/Role';
import { emailRegex } from '../../../shared/utils/emailRegex';

export interface UserInterface extends Omit<IUser, '_id'>, Document {}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, validate: (value: string) => emailRegex.test(value) },
  role: { type: String, required: true, validate: (value: string) => value in Role },
});

const User = mongoose.model<UserInterface>('User', UserSchema);
export default User;
