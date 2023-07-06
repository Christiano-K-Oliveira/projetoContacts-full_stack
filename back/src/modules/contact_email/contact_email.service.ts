import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateContactEmailDto } from './dto/create-contact_email.dto';
import { UpdateContactEmailDto } from './dto/update-contact_email.dto';
import { ContactEmailRepository } from './repositories/contactEmail.repository';
import { ContactsRepository } from '../contacts/repositories/contacts.repository';

@Injectable()
export class ContactEmailService {
  constructor(
    private contactEmailRepository: ContactEmailRepository,
    private contactsRepository: ContactsRepository,
  ) {}

  async create(createContactEmailDto: CreateContactEmailDto, clientId: string) {
    const findContactEmail =
      await this.contactEmailRepository.findByContactEmail(
        createContactEmailDto.contact_id,
        createContactEmailDto.email,
      );
    const findContact = await this.contactsRepository.findById(
      createContactEmailDto.contact_id,
    );

    if (findContact.client_id !== clientId) {
      throw new UnauthorizedException(
        'Contact does not belong to this customer',
      );
    }
    if (findContactEmail) {
      throw new ConflictException('The email in this contact already exists');
    }

    const contactEmail = await this.contactEmailRepository.create(
      createContactEmailDto,
    );

    return contactEmail;
  }

  async findOne(id: string, clientId: string) {
    const contactEmail = await this.contactEmailRepository.findOne(id);
    const filterContactEmail = contactEmail.filter(
      (contact) => contact.contact_id === id,
    );
    const findContact = await this.contactsRepository.findById(
      filterContactEmail[0].contact_id,
    );

    if (findContact.client_id !== clientId) {
      throw new UnauthorizedException(
        'Contact does not belong to this customer',
      );
    }
    if (!filterContactEmail) {
      throw new NotFoundException('Email not found');
    }

    return filterContactEmail;
  }

  async update(
    id: string,
    updateContactEmailDto: UpdateContactEmailDto,
    clientId: string,
  ) {
    const findContactEmail = await this.contactEmailRepository.findOne(id);
    const filterContactEmail = findContactEmail.filter(
      (contact) => contact.contact_id === id,
    );
    const findContact = await this.contactsRepository.findById(
      filterContactEmail[0].contact_id,
    );

    if (findContact.client_id !== clientId) {
      throw new UnauthorizedException(
        'Contact does not belong to this customer',
      );
    }
    if (!filterContactEmail) {
      throw new NotFoundException('Email not found');
    }

    const contactEmail = await this.contactEmailRepository.update(
      id,
      updateContactEmailDto,
    );

    return contactEmail;
  }

  async remove(id: string, clientId: string) {
    const findContactEmail = await this.contactEmailRepository.findById(id);

    if (!findContactEmail) {
      throw new NotFoundException('Email not found');
    }

    const findContact = await this.contactsRepository.findById(
      findContactEmail.contact_id,
    );
    if (findContact.client_id !== clientId) {
      throw new UnauthorizedException(
        'Contact does not belong to this customer',
      );
    }

    await this.contactEmailRepository.delete(id);
    return;
  }
}
