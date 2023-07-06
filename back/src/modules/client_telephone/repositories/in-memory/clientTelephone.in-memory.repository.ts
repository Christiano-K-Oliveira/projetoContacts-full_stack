import { Injectable } from '@nestjs/common';
import { CreateClientTelephoneDto } from '../../dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from '../../dto/update-client_telephone.dto';
import { ClientTelephone } from '../../entities/client_telephone.entity';
import { ClientTelephoneRepository } from '../clientTelephone.repository';

@Injectable()
export class ClientTelephoneInMemoryRepository
  implements ClientTelephoneRepository
{
  private database: ClientTelephone[] = [];
  create(
    data: CreateClientTelephoneDto,
    clientId: string,
  ): ClientTelephone | Promise<ClientTelephone> {
    const newClient = new ClientTelephone();
    Object.assign(newClient, {
      ...data,
      client_id: clientId,
    });

    this.database.push(newClient);

    return newClient;
  }

  findOne(client_id: string): ClientTelephone[] | Promise<ClientTelephone[]> {
    const clientTelephones: ClientTelephone[] = [];
    this.database.map((client) => {
      if (client.client_id === client_id) {
        clientTelephones.push(client);
      }
    });

    return clientTelephones;
  }
  findByClientTelephone(
    id: string,
    number: string,
  ): ClientTelephone | Promise<ClientTelephone> {
    const findClientTelephone = this.database.find(
      (client) => client.id === id && client.number === number,
    );

    return findClientTelephone;
  }
  update(
    id: string,
    data: UpdateClientTelephoneDto,
  ): ClientTelephone | Promise<ClientTelephone> {
    const clientIndex = this.database.findIndex((client) => client.id === id);
    this.database[clientIndex] = {
      ...this.database[clientIndex],
      ...data,
    };

    return this.database[clientIndex];
  }
  delete(id: string): void | Promise<void> {
    const clientIndex = this.database.findIndex((client) => client.id === id);
    this.database.splice(clientIndex, 1);
  }
}
