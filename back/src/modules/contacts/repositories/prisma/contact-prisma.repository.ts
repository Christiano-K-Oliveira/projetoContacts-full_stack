import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from 'database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { UpdateUploadDto } from '../../dto/update-upload.dto';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto, clientId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
      email: data.email,
    });

    const newContact = await this.prisma.contact.create({
      data: { ...contact, client_id: clientId },
    });

    return plainToInstance(Contact, newContact);
  }
  // async findAll(): Promise<Contact[]> {
  //   const contacts = await this.prisma.contact.findMany();

  //   return contacts;
  // }
  async findOne(client_id: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: { client_id },
    });

    return plainToInstance(Contact, contacts);
  }
  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Contact, contact);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
  async findById(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });

    return contact;
  }

  async updateUpload(
    // cover_image: Express.Multer.File,
    // contact: Express.Multer.File,.
    data: UpdateUploadDto,
    contact_id: string,
  ): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: {
        id: contact_id,
      },
      data: { ...data },
    });
    return contact;
  }
}
