import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/myapp'),
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AdminModule],
})
export class AppModule {}
