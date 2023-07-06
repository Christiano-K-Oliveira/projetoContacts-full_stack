import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateContactTelephoneDto } from './dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from './dto/update-contact_telephone.dto';
import { ContactTelephoneRepository } from './repositories/contactTelephone.repository';
import { ContactsRepository } from '../contacts/repositories/contacts.repository';

@Injectable()
export class ContactTelephoneService {
  constructor(
    private contactTelephoneRepository: ContactTelephoneRepository,
    private conatctsRepository: ContactsRepository,
  ) {}

  async create(createContactTelephoneDto: CreateContactTelephoneDto) {
    const findContactTelephone =
      await this.contactTelephoneRepository.findByContactTelephone(
        createContactTelephoneDto.contact_id,
        createContactTelephoneDto.number,
      );

    if (findContactTelephone) {
      throw new ConflictException('The phone in this contact already exists');
    }

    const contactTelephone = await this.contactTelephoneRepository.create(
      createContactTelephoneDto,
    );

    return contactTelephone;
  }

  async findOne(id: string, clientId: string) {
    const contactTelephone = await this.contactTelephoneRepository.findOne(id);
    const filterContactTelephone = contactTelephone.filter(
      (contact) => contact.contact_id === id,
    );
    const findContact = await this.conatctsRepository.findById(
      filterContactTelephone[0].contact_id,
    );

    if (findContact.client_id !== clientId) {
      throw new UnauthorizedException(
        'Contact does not belong to this customer',
      );
    }
    if (!filterContactTelephone) {
      throw new NotFoundException('Phone not found');
    }

    return filterContactTelephone;
  }

  async update(
    id: string,
    updateContactTelephoneDto: UpdateContactTelephoneDto,
    clientId: string,
  ) {
    const findContactTelephone = await this.contactTelephoneRepository.findOne(
      id,
    );
    const filterContactTelephone = findContactTelephone.filter(
      (contact) => contact.contact_id === id,
    );
    const findContact = await this.conatctsRepository.findById(
      filterContactTelephone[0].contact_id,
    );

    if (findContact.client_id !== clientId) {
      throw new UnauthorizedException(
        'Contact does not belong to this customer',
      );
    }
    if (!filterContactTelephone) {
      throw new NotFoundException('Phone not found');
    }
    const contactTelephone = await this.contactTelephoneRepository.update(
      id,
      updateContactTelephoneDto,
    );

    return contactTelephone;
  }

  async remove(id: string, clientId: string) {
    const findContactTelephone = await this.contactTelephoneRepository.findById(
      id,
    );

    if (!findContactTelephone) {
      throw new NotFoundException('Phone not found');
    }

    const findContact = await this.conatctsRepository.findById(
      findContactTelephone.contact_id,
    );

    if (findContact.client_id !== clientId) {
      throw new UnauthorizedException(
        'Contact does not belong to this customer',
      );
    }

    await this.contactTelephoneRepository.delete(id);
    return;
  }
}
