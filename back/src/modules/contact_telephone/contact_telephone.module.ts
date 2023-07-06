import { Module } from '@nestjs/common';
import { ContactTelephoneService } from './contact_telephone.service';
import { ContactTelephoneController } from './contact_telephone.controller';
import { ContactTelephoneRepository } from './repositories/contactTelephone.repository';
// import { ContactTelephoneInMemoryRepository } from './repositories/in-memory/contactTelephone.in-memory.repository';
import { PrismaService } from 'database/prisma.service';
import { ContactTelephonePrismaRepository } from './repositories/prisma/contactTelephone-prisma.repository';
import { ContactsModule } from '../contacts/contacts.module';

@Module({
  imports: [ContactsModule],
  controllers: [ContactTelephoneController],
  providers: [
    ContactTelephoneService,
    PrismaService,
    {
      provide: ContactTelephoneRepository,
      useClass: ContactTelephonePrismaRepository,
    },
  ],
})
export class ContactTelephoneModule {}
