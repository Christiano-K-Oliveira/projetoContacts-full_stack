import { Module } from '@nestjs/common';
import { ContactEmailService } from './contact_email.service';
import { ContactEmailController } from './contact_email.controller';
import { ContactEmailRepository } from './repositories/contactEmail.repository';
// import { ContactEmailInMemoryRepository } from './repositories/in-memory/contactEmail.in-memory.repository';
import { PrismaService } from 'database/prisma.service';
import { ContactEmailPrismaRepository } from './repositories/prisma/contactEmail-prisma.repository';
import { ContactsModule } from '../contacts/contacts.module';

@Module({
  imports: [ContactsModule],
  controllers: [ContactEmailController],
  providers: [
    ContactEmailService,
    PrismaService,
    {
      provide: ContactEmailRepository,
      useClass: ContactEmailPrismaRepository,
    },
  ],
})
export class ContactEmailModule {}
