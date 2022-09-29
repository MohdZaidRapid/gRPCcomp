import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async hello() {
    try {
      return this.userService.hello();
    } catch (error) {
      console.log(error);
    }
  }
}
