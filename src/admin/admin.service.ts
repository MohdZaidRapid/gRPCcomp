import { HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './interfaces/student.interface';
import { User } from './interfaces/user.interface';
import { StudentSchema } from './schemas/student.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('Student') private studentModel: Model<Student>,
  ) {}
  async hi(adminDto) {
    console.log(adminDto);
    return {
      message: 'helloAdmin',
    };
  }
  async postStudent(adminDto) {
    try {
      const user = await this.userModel.create(adminDto);
      console.log(user);
      await user.save();

      return {
        message: 'User created successfully',
        status: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async addStudent(studentDto) {
    try {
      const student = await this.studentModel.create(studentDto);
      console.log(student);
      await student.save();

      return {
        message: 'Student created successfully',
        status: true,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getStudents(studentDto) {
    try {
      const students = await this.studentModel
        .find()
        .populate('userId', '-_id name age');

      console.log(students);
      return {
        students: students,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
