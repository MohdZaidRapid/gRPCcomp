import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @GrpcMethod('UserService', 'hello')
  async hello(userDto) {
    console.log('microservice');
    return await this.userService.hello(userDto);
  }
}
