import { Injectable } from '@nestjs/common';
import { CreateContactEmailDto } from '../../dto/create-contact_email.dto';
import { UpdateContactEmailDto } from '../../dto/update-contact_email.dto';
import { ContactEmail } from '../../entities/contact_email.entity';
import { ContactEmailRepository } from '../contactEmail.repository';

@Injectable()
export class ContactEmailInMemoryRepository implements ContactEmailRepository {
  private database: ContactEmail[] = [];

  create(data: CreateContactEmailDto): ContactEmail | Promise<ContactEmail> {
    const newContactEmail = new ContactEmail();
    Object.assign(newContactEmail, {
      ...data,
    });

    this.database.push(newContactEmail);

    return newContactEmail;
  }

  findOne(contact_id: string): ContactEmail[] | Promise<[ContactEmail]> {
    const contactEmails: ContactEmail[] = [];
    this.database.map((contactEmail) => {
      if (contactEmail.contact_id === contact_id) {
        contactEmails.push(contactEmail);
      }
    });

    return contactEmails;
  }

  findByContactEmail(
    id: string,
    email: string,
  ): ContactEmail | Promise<ContactEmail> {
    const findContactEmail = this.database.find(
      (contactEmail) =>
        contactEmail.contact_id === id && contactEmail.email === email,
    );

    return findContactEmail;
  }

  update(
    id: string,
    data: UpdateContactEmailDto,
  ): ContactEmail | Promise<ContactEmail> {
    const contactEmailIndex = this.database.findIndex(
      (contactEmail) => contactEmail.id === id,
    );
    this.database[contactEmailIndex] = {
      ...this.database[contactEmailIndex],
      ...data,
    };

    return this.database[contactEmailIndex];
  }

  delete(id: string): void | Promise<void> {
    const contactEmailIndex = this.database.findIndex(
      (contactEmail) => contactEmail.id === id,
    );
    this.database.splice(contactEmailIndex, 1);
  }

  findById(id: string): ContactEmail | Promise<ContactEmail> {
    const findContactEmail = this.database.find(
      (contactEmail) => contactEmail.id === id,
    );

    return findContactEmail;
  }
}
