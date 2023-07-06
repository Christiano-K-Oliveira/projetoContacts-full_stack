import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';
import { v2 as cloudinary } from 'cloudinary';
import { unlink } from 'node:fs';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}

  async create(createContactDto: CreateContactDto, clientId: string) {
    const findContact = await this.contactsRepository.findById(clientId);
    if (findContact) {
      throw new ConflictException('This customer already has this contact');
    }

    const contact = await this.contactsRepository.create(
      createContactDto,
      clientId,
    );

    return contact;
  }

  // async findAll() {
  //   const contacts = await this.contactsRepository.findAll();

  //   return contacts;
  // }

  async findOne(id: string, clientId: string) {
    const contact = await this.contactsRepository.findOne(id);
    console.log(contact);
    const filterContact = contact.filter(
      (contact) => contact.client_id === clientId,
    );

    if (!filterContact) {
      throw new NotFoundException('Contact Not Found');
    }
    if (filterContact[0].client_id !== clientId) {
      throw new UnauthorizedException(
        'Account is not authorized for a contact on this client',
      );
    }

    return filterContact;
  }

  async update(
    id: string,
    updateContactDto: UpdateContactDto,
    clientId: string,
  ) {
    const findContact = await this.contactsRepository.findOne(id);
    const filterContact = findContact.filter(
      (contact) => contact.client_id === clientId,
    );

    if (filterContact[0].client_id !== clientId) {
      throw new UnauthorizedException(
        'Account is not authorized for a contact on this client',
      );
    }
    if (!filterContact) {
      throw new NotFoundException('Contact Not Found');
    }

    const contact = await this.contactsRepository.update(id, updateContactDto);

    return contact;
  }

  async remove(id: string, clientId: string) {
    const findContact = await this.contactsRepository.findOne(clientId);
    const filterContact = findContact.filter(
      (contact) => contact.client_id === clientId,
    );

    if (!filterContact) {
      throw new NotFoundException('Contact Not Found');
    }
    if (filterContact[0].client_id !== clientId) {
      throw new UnauthorizedException(
        'Account is not authorized for a contact on this client',
      );
    }

    await this.contactsRepository.delete(id);
    return;
  }

  async upload(
    cover_image: Express.Multer.File,
    contact: Express.Multer.File,
    contact_id: string,
  ) {
    cloudinary.config({
      cloud_name: 'dgskdps1l',
      api_key: '935583466128746',
      api_secret: '1SY31zQo5kNld_RY7Mk_WyMZ1Lo',
    });

    const findContact = await this.contactsRepository.findOne(contact_id);

    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }

    const uploadImage = await cloudinary.uploader.upload(
      cover_image.path,
      { resource_type: 'image' },
      (error, result) => {
        return result;
      },
    );

    const uploadContact = await cloudinary.uploader.upload(
      contact.path,
      { resource_type: 'video' },
      (error, result) => {
        return result;
      },
    );

    const updateImage = await this.contactsRepository.updateUpload(
      {
        name: uploadImage.secure_url,
        telephone: uploadContact.secure_url,
      },
      contact_id,
    );

    unlink(cover_image.path, (error) => {
      if (error) console.log(error);
    });

    unlink(contact.path, (error) => {
      if (error) console.log(error);
    });

    return updateImage;
  }
}
