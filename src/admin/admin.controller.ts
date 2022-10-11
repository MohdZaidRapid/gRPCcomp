import { Controller, Get, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto, GetStudentDto } from './dto/admin.dto';
import { StudentDto } from './dto/student.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  async hi() {
    try {
      return this.adminService.hi();
    } catch (error) {
      console.log(error);
    }
  }

  @Post('')
  async postStudent(@Body() adminDto: AdminDto): Promise<any> {
    try {
      const data = this.adminService.postStudent(adminDto);
      console.log(data + '     ');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  @Post('student')
  async addStudent(@Body() studentDto: StudentDto): Promise<any> {
    try {
      const data = this.adminService.postStudent(studentDto);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  @Get('students')
  async getStudents(@Body() getStudentDto: GetStudentDto): Promise<any> {
    try {
      const students = this.adminService.getStudents(getStudentDto);
      console.log(students);
      return students;
    } catch (error) {
      console.log(error);
    }
  }
}
