import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private adminService: AdminService) {}

  @GrpcMethod('AdminService', 'hi')
  async hi(adminDto) {
    console.log('microservice');
    return await this.adminService.hi(adminDto);
  }

  @GrpcMethod('AdminService', 'postStudent')
  async postStudent(adminDto) {
    return await this.adminService.postStudent(adminDto);
  }
}
