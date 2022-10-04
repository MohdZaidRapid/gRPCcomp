import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50053',
      package: 'admins',
      protoPath: join(__dirname, './_proto/admin.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true,
      },
    },
  });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}
bootstrap();
