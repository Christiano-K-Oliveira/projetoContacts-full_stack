import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { ContactsRepository } from '../contacts.repository';
import { UpdateUploadDto } from '../../dto/update-upload.dto';

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository {
  updateUpload(
    // cover_image: Express.Multer.File,
    // contact: Express.Multer.File,
    data: UpdateUploadDto,
    contact_id: string,
  ): Promise<Contact> {
    console.log(data, contact_id);
    throw new Error('Method not implemented.');
  }
  private database: Contact[] = [];

  create(data: CreateContactDto, clientId: string): Contact | Promise<Contact> {
    const newContact = new Contact();
    Object.assign(newContact, {
      ...data,
      email: data.email || null,
      client_id: clientId,
    });

    this.database.push(newContact);

    return newContact;
  }

  // findAll(): Contact[] | Promise<Contact[]> {
  //   return this.database;
  // }
  findOne(client_id: string): Contact[] | Promise<Contact[]> {
    const contacts: Contact[] = [];
    this.database.map((contact) => {
      if (contact.id === client_id) {
        contacts.push(contact);
      }
    });

    return contacts;
  }
  findById(id: string): Contact | Promise<Contact> {
    const findContact = this.database.find(
      (contact) => contact.client_id === id,
    );

    return findContact;
  }
  update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
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
}
