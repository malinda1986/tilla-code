import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

const providers = [PrismaService];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class SharedModule {}
