import { Module } from '@nestjs/common';
import { ClientEmailService } from './client_email.service';
import { ClientEmailController } from './client_email.controller';
import { ClientEmailRepository } from './repositories/clientEmail.repository';
// import { ClientEmailInMemoryRepository } from './repositories/in-memory/clientEmail.in-memory.repository';
import { PrismaService } from 'database/prisma.service';
import { ClientEmailPrismaRepository } from './repositories/prisma/clientEmail-prisma.repository';

@Module({
  controllers: [ClientEmailController],
  providers: [
    ClientEmailService,
    PrismaService,
    {
      provide: ClientEmailRepository,
      useClass: ClientEmailPrismaRepository,
    },
  ],
})
export class ClientEmailModule {}
