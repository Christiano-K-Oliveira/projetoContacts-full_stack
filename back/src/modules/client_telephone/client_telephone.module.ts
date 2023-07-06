import { Module } from '@nestjs/common';
import { ClientTelephoneService } from './client_telephone.service';
import { ClientTelephoneController } from './client_telephone.controller';
import { ClientTelephoneRepository } from './repositories/clientTelephone.repository';
// import { ClientTelephoneInMemoryRepository } from './repositories/in-memory/clientTelephone.in-memory.repository';
import { PrismaService } from 'database/prisma.service';
import { ClientTelephonePrismaRepository } from './repositories/prisma/clientTelephone-prisma.repository';

@Module({
  controllers: [ClientTelephoneController],
  providers: [
    ClientTelephoneService,
    PrismaService,
    {
      provide: ClientTelephoneRepository,
      useClass: ClientTelephonePrismaRepository,
    },
  ],
})
export class ClientTelephoneModule {}
