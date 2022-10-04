import { HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class AdminService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
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
}
// createNewMerchant
