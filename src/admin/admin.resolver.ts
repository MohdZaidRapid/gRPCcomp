import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';

import { AdminDto, GetStudentDto } from './dto/admin.dto';
import {
  AdminDef,
  Admin,
  StudentDef,
  AllStudentDef,
} from '../admin/typeDef/resolver-type';
import { StudentDto } from './dto/student.dto';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => AdminDef, { name: 'admins' })
  async postStudent(@Args('input') adminDto: AdminDto) {
    console.log('admin');
    try {
      const data = await this.adminService.postStudent(adminDto);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => StudentDef, { name: 'student' })
  async addStudent(@Args('input') studentDto: StudentDto) {
    console.log('student');
    try {
      const data = await this.adminService.addStudent(studentDto);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  @Query(() => AllStudentDef, { name: 'Students' })
  async getStudents(@Args('input') getStudentDto: GetStudentDto) {
    try {
      const data = this.adminService.getStudents(getStudentDto);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
