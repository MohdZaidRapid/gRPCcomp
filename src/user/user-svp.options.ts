import { join } from 'path';
import { ClientOptions, Transport } from '@nestjs/microservices';

export const UserServiceClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50052',
    package: 'users',
    protoPath: join(__dirname, '../_proto/user.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
