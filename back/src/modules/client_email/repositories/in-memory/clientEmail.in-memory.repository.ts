import { Injectable } from '@nestjs/common';
import { CreateClientEmailDto } from '../../dto/create-client_email.dto';
import { UpdateClientEmailDto } from '../../dto/update-client_email.dto';
import { ClientEmail } from '../../entities/client_email.entity';
import { ClientEmailRepository } from '../clientEmail.repository';

@Injectable()
export class ClientEmailInMemoryRepository implements ClientEmailRepository {
  private database: ClientEmail[] = [];
  create(
    data: CreateClientEmailDto,
    clientId: string,
  ): ClientEmail | Promise<ClientEmail> {
    const newClientEmail = new ClientEmail();
    Object.assign(newClientEmail, {
      ...data,
      client_id: clientId,
    });

    this.database.push(newClientEmail);

    return newClientEmail;
  }
  findOne(client_id: string): ClientEmail[] | Promise<ClientEmail[]> {
    const clientEmails: ClientEmail[] = [];
    this.database.map((client) => {
      if (client.client_id === client_id) {
        clientEmails.push(client);
      }
    });

    return clientEmails;
  }
  findByClientEmail(
    id: string,
    email: string,
  ): ClientEmail | Promise<ClientEmail> {
    const clientEmail = this.database.find(
      (client) => client.id === id && client.email === email,
    );

    return clientEmail;
  }
  update(
    id: string,
    data: UpdateClientEmailDto,
  ): ClientEmail | Promise<ClientEmail> {
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
