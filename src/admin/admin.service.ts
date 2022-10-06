// import { Client } from '@grpc/grpc-js';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
// import { AdminDto } from './dto/admin.dto';
import { adminServiceInterface } from 'src/_proto/interfaces/adminServiceInterface';
import { AdminServiceClientOptions } from './admin-svp.options';

@Injectable()
export class AdminService implements OnModuleInit {
  constructor() {}
  @Client(AdminServiceClientOptions)
  private readonly adminServiceClient: ClientGrpc;
  private adminMicroService: any;

  onModuleInit() {
    this.adminMicroService =
      this.adminServiceClient.getService<adminServiceInterface>('AdminService');
  }
  async hi() {
    console.log('hello== -------------------->-------->---------->');
    const data = await this.adminMicroService
      .hi({ message: 'hello hello' })
      .toPromise();
    return data;
  }

  async postStudent(AdminDto) {
    const students = await this.adminMicroService
      .postStudent(AdminDto)
      .toPromise();
    return students;
  }

  async addStudent(studentDto) {
    const stud = await this.adminMicroService
      .addStudent(studentDto)
      .toPromise();
    return stud;
  }
}
