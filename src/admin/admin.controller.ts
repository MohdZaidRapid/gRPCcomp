import { Controller, Get, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './dto/admin.dto';

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
}
