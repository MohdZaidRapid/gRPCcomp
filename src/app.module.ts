import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { join } from 'path';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        playground: true,
        autoSchemaFile: join(process.cwd(), 'schema.gql'),
      }),
    }),
    UserModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService, AppResolver],
})
export class AppModule {}
