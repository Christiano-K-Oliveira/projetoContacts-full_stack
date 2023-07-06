import { Injectable } from '@nestjs/common';
import { ClientTelephoneRepository } from '../clientTelephone.repository';
import { CreateClientTelephoneDto } from '../../dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from '../../dto/update-client_telephone.dto';
import { ClientTelephone } from '../../entities/client_telephone.entity';
import { PrismaService } from 'database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientTelephonePrismaRepository
  implements ClientTelephoneRepository
{
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreateClientTelephoneDto,
    clientId: string,
  ): Promise<ClientTelephone> {
    const clientTelephone = new ClientTelephone();
    Object.assign(clientTelephone, {
      ...data,
    });

    const newClientTelephone = await this.prisma.clientTelephone.create({
      data: { ...clientTelephone, client_id: clientId },
    });

    return plainToInstance(ClientTelephone, newClientTelephone);
  }
  async findOne(client_id: string): Promise<ClientTelephone[]> {
    const clientTelephone = await this.prisma.clientTelephone.findMany({
      where: { client_id },
    });

    return plainToInstance(ClientTelephone, clientTelephone);
  }
  async update(
    id: string,
    data: UpdateClientTelephoneDto,
  ): Promise<ClientTelephone> {
    const clientTelephone = await this.prisma.clientTelephone.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(ClientTelephone, clientTelephone);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.clientTelephone.delete({
      where: { id },
    });
  }
  async findByClientTelephone(
    id: string,
    number: string,
  ): Promise<ClientTelephone> {
    const clientTelephone = await this.prisma.clientTelephone.findFirst({
      where: { id, number },
    });

    return plainToInstance(ClientTelephone, clientTelephone);
  }
}
