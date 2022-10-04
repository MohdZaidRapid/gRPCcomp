import { join } from 'path';
import { ClientOptions, Transport } from '@nestjs/microservices';

export const AdminServiceClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50053',
    package: 'admins',
    protoPath: join(__dirname, '../_proto/admin.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
