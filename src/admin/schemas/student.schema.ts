import * as mongoose from 'mongoose';
import { Student } from '../interfaces/student.interface';

export const StudentSchema = new mongoose.Schema<Student>({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  rollNo: String,
});
