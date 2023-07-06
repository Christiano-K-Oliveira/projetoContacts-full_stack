import { Injectable } from '@nestjs/common';
import { CreateContactTelephoneDto } from '../../dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from '../../dto/update-contact_telephone.dto';
import { ContactTelephone } from '../../entities/contact_telephone.entity';
import { ContactTelephoneRepository } from '../contactTelephone.repository';

@Injectable()
export class ContactTelephoneInMemoryRepository
  implements ContactTelephoneRepository
{
  private database: ContactTelephone[] = [];

  create(
    data: CreateContactTelephoneDto,
  ): ContactTelephone | Promise<ContactTelephone> {
    const newContactTelephone = new ContactTelephone();
    Object.assign(newContactTelephone, {
      ...data,
    });

    this.database.push(newContactTelephone);

    return newContactTelephone;
  }

  findOne(
    contact_id: string,
  ): ContactTelephone[] | Promise<ContactTelephone[]> {
    const contactTelephones: ContactTelephone[] = [];
    this.database.map((contact) => {
      if (contact.contact_id === contact_id) {
        contactTelephones.push(contact);
      }
    });

    return contactTelephones;
  }

  findByContactTelephone(
    id: string,
    telephone: string,
  ): ContactTelephone | Promise<ContactTelephone> {
    const findContactTelephone = this.database.find(
      (contact) => contact.contact_id === id && contact.number === telephone,
    );

    return findContactTelephone;
  }

  update(
    id: string,
    data: UpdateContactTelephoneDto,
  ): ContactTelephone | Promise<ContactTelephone> {
    const contactIndex = this.database.findIndex(
      (contact) => contact.id === id,
    );
    this.database[contactIndex] = {
      ...this.database[contactIndex],
      ...data,
    };

    return this.database[contactIndex];
  }

  delete(id: string): void | Promise<void> {
    const contactIndex = this.database.findIndex(
      (contact) => contact.id === id,
    );
    this.database.splice(contactIndex, 1);
  }

  findById(id: string): ContactTelephone | Promise<ContactTelephone> {
    const findContactTelephone = this.database.find(
      (contact) => contact.contact_id === id,
    );

    return findContactTelephone;
  }
}
