import { Document } from 'mongoose';

export interface Student extends Document {
  name: string;
  age: string;
  rollNo: string;
}
