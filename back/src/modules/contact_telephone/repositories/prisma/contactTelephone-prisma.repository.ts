import { Injectable } from '@nestjs/common';
import { ContactTelephoneRepository } from '../contactTelephone.repository';
import { PrismaService } from 'database/prisma.service';
import { CreateContactTelephoneDto } from '../../dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from '../../dto/update-contact_telephone.dto';
import { ContactTelephone } from '../../entities/contact_telephone.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactTelephonePrismaRepository
  implements ContactTelephoneRepository
{
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactTelephoneDto): Promise<ContactTelephone> {
    const contactTelephone = new ContactTelephone();
    Object.assign(contactTelephone, {
      ...data,
    });

    const newContactTelephone = await this.prisma.contactTelephone.create({
      data: { ...contactTelephone },
    });

    return plainToInstance(ContactTelephone, newContactTelephone);
  }
  async findOne(contact_id: string): Promise<ContactTelephone[]> {
    const contactTelephones = await this.prisma.contactTelephone.findMany({
      where: { contact_id },
    });

    return plainToInstance(ContactTelephone, contactTelephones);
  }
  async update(
    id: string,
    data: UpdateContactTelephoneDto,
  ): Promise<ContactTelephone> {
    const contactTelephone = await this.prisma.contactTelephone.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(ContactTelephone, contactTelephone);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.contactTelephone.delete({
      where: { id },
    });
  }
  async findByContactTelephone(
    id: string,
    number: string,
  ): Promise<ContactTelephone> {
    const contactTelephone = await this.prisma.contactTelephone.findFirst({
      where: { id, number },
    });

    return plainToInstance(ContactTelephone, contactTelephone);
  }
  async findById(id: string): Promise<ContactTelephone> {
    const contactTelephone = await this.prisma.contactTelephone.findFirst({
      where: { id },
    });

    return plainToInstance(ContactTelephone, contactTelephone);
  }
}
