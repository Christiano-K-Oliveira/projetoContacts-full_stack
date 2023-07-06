import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateClientEmailDto } from './dto/create-client_email.dto';
import { UpdateClientEmailDto } from './dto/update-client_email.dto';
import { ClientEmailRepository } from './repositories/clientEmail.repository';

@Injectable()
export class ClientEmailService {
  constructor(private clientEmailRepository: ClientEmailRepository) {}

  async create(createClientEmailDto: CreateClientEmailDto, clientId: string) {
    const findClientEmail = await this.clientEmailRepository.findByClientEmail(
      clientId,
      createClientEmailDto.email,
    );
    if (findClientEmail) {
      throw new ConflictException('This email is already registered');
    }
    const clientEmail = await this.clientEmailRepository.create(
      createClientEmailDto,
      clientId,
    );

    return clientEmail;
  }

  async findOne(id: string, clientId: string) {
    if (id !== clientId) {
      throw new UnauthorizedException(
        'Account does not have authorization on the client passed by id',
      );
    }

    const clientEmail = await this.clientEmailRepository.findOne(id);
    if (!clientEmail) {
      throw new NotFoundException('Customer email not found');
    }

    return clientEmail;
  }

  async update(
    id: string,
    updateClientEmailDto: UpdateClientEmailDto,
    clientId: string,
  ) {
    if (id !== clientId) {
      throw new UnauthorizedException(
        'Account does not have authorization on the client passed by id',
      );
    }

    const findClientEmail = await this.clientEmailRepository.findOne(id);
    if (!findClientEmail) {
      throw new NotFoundException('Customer email not found');
    }

    const clientEmail = await this.clientEmailRepository.update(
      id,
      updateClientEmailDto,
    );

    return clientEmail;
  }

  async remove(id: string, clientId: string) {
    const findClientEmail = await this.clientEmailRepository.findOne(clientId);
    const filterFindClientEmail = findClientEmail.filter(
      (item) => item.id === id,
    );
    if (!filterFindClientEmail[0]) {
      throw new NotFoundException('Customer email not found');
    }
    if (filterFindClientEmail[0].client_id !== clientId) {
      throw new UnauthorizedException(
        'Account does not have authorization on the client passed by id',
      );
    }

    await this.clientEmailRepository.delete(id);
    return;
  }
}
