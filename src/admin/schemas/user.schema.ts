import * as mongoose from 'mongoose';
import { User } from '../interfaces/user.interface';

export const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
});
