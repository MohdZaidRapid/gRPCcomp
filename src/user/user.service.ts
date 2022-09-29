// import { Client } from '@grpc/grpc-js';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { userServiceInterface } from 'src/_proto/interfaces/userService.interface';
import { UserServiceClientOptions } from './user-svp.options';

@Injectable()
export class UserService implements OnModuleInit {
  constructor() {}
  @Client(UserServiceClientOptions)
  private readonly userServiceClient: ClientGrpc;
  private userMicroService: any;

  onModuleInit() {
    this.userMicroService =
      this.userServiceClient.getService<userServiceInterface>('UserService');
  }
  async hello() {
    console.log('hello==----------');
    const data = await this.userMicroService
      .hello({ message: 'hello hello' })
      .toPromise();
    return data;
  }
}
