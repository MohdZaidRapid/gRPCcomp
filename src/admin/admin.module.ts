import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminResolver } from './admin.resolver';
import { join } from 'path';
// import { AdminDto } from './dto/admin.dto';

@Module({
  imports: [],
  providers: [AdminService, AdminResolver],
  controllers: [AdminController],
  exports: [AdminService, AdminResolver],
})
export class AdminModule {}
