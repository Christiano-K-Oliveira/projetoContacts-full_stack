import { Module } from '@nestjs/common';
import { ContactsModule } from './modules/contacts/contacts.module';
import { ContactEmailModule } from './modules/contact_email/contact_email.module';
import { ContactTelephoneModule } from './modules/contact_telephone/contact_telephone.module';
import { ClientEmailModule } from './modules/client_email/client_email.module';
import { ClientTelephoneModule } from './modules/client_telephone/client_telephone.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ContactsModule,
    ContactEmailModule,
    ContactTelephoneModule,
    ClientEmailModule,
    ClientTelephoneModule,
    AuthModule,
  ],
})
export class AppModule {}
