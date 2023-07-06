import { Injectable } from '@nestjs/common';
import { ContactEmailRepository } from '../contactEmail.repository';
import { CreateContactEmailDto } from '../../dto/create-contact_email.dto';
import { UpdateContactEmailDto } from '../../dto/update-contact_email.dto';
import { ContactEmail } from '../../entities/contact_email.entity';
import { PrismaService } from 'database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactEmailPrismaRepository implements ContactEmailRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactEmailDto): Promise<ContactEmail> {
    const contactEmail = new ContactEmail();
    Object.assign(contactEmail, {
      ...data,
    });

    const newContactEmail = await this.prisma.contactEmail.create({
      data: { ...contactEmail },
    });

    return plainToInstance(ContactEmail, newContactEmail);
  }
  async findOne(contact_id: string): Promise<ContactEmail[]> {
    const contactEmail = await this.prisma.contactEmail.findMany({
      where: { contact_id },
    });

    return plainToInstance(ContactEmail, contactEmail);
  }
  async update(id: string, data: UpdateContactEmailDto): Promise<ContactEmail> {
    const contactEmail = await this.prisma.contactEmail.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(ContactEmail, contactEmail);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.contactEmail.delete({
      where: { id },
    });
  }
  async findByContactEmail(id: string, email: string): Promise<ContactEmail> {
    const contactEmail = await this.prisma.contactEmail.findFirst({
      where: { id, email },
    });

    return plainToInstance(ContactEmail, contactEmail);
  }
  async findById(id: string): Promise<ContactEmail> {
    const contactEmail = await this.prisma.contactEmail.findFirst({
      where: { id },
    });

    return plainToInstance(ContactEmail, contactEmail);
  }
}
