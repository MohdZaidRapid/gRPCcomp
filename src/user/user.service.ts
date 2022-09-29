import { HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  async hello(userDto) {
    console.log(userDto);
    return {
      message: 'hello',
    };
  }
}
