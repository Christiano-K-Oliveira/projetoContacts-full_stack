import { Injectable } from '@nestjs/common';
import { ClientEmailRepository } from '../clientEmail.repository';
import { PrismaService } from 'database/prisma.service';
import { CreateClientEmailDto } from '../../dto/create-client_email.dto';
import { UpdateClientEmailDto } from '../../dto/update-client_email.dto';
import { ClientEmail } from '../../entities/client_email.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientEmailPrismaRepository implements ClientEmailRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateClientEmailDto,
    clientId: string,
  ): Promise<ClientEmail> {
    const clientEmail = new ClientEmail();
    Object.assign(clientEmail, {
      ...data,
    });

    const newClientEmail = await this.prisma.clientEmail.create({
      data: { ...clientEmail, client_id: clientId },
    });

    return plainToInstance(ClientEmail, newClientEmail);
  }
  async findOne(client_id: string): Promise<ClientEmail[]> {
    const clientEmail = await this.prisma.clientEmail.findMany({
      where: { client_id },
    });

    return plainToInstance(ClientEmail, clientEmail);
  }
  async update(id: string, data: UpdateClientEmailDto): Promise<ClientEmail> {
    const clientEmail = await this.prisma.clientEmail.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(ClientEmail, clientEmail);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.clientEmail.delete({
      where: { id },
    });
  }
  async findByClientEmail(id: string, email: string): Promise<ClientEmail> {
    const clientEmail = await this.prisma.clientEmail.findFirst({
      where: { id, email },
    });

    return plainToInstance(ClientEmail, clientEmail);
  }
}
