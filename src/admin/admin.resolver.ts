import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';

import { AdminDto } from './dto/admin.dto';
import { AdminDef, Admin } from '../admin/typeDef/resolver-type';

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
}
