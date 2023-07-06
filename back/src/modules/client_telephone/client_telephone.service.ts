import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateClientTelephoneDto } from './dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from './dto/update-client_telephone.dto';
import { ClientTelephoneRepository } from './repositories/clientTelephone.repository';

@Injectable()
export class ClientTelephoneService {
  constructor(private clientTelephoneRepository: ClientTelephoneRepository) {}

  async create(
    createClientTelephoneDto: CreateClientTelephoneDto,
    clientId: string,
  ) {
    const findClientTelephone =
      await this.clientTelephoneRepository.findByClientTelephone(
        clientId,
        createClientTelephoneDto.number,
      );
    if (findClientTelephone) {
      throw new ConflictException('This phone is already registered');
    }

    const clientTelephone = await this.clientTelephoneRepository.create(
      createClientTelephoneDto,
      clientId,
    );

    return clientTelephone;
  }

  async findOne(id: string, clientId: string) {
    if (id !== clientId) {
      throw new UnauthorizedException(
        'Account does not have authorization on the client passed by id',
      );
    }

    const clientTelephone = await this.clientTelephoneRepository.findOne(id);
    if (!clientTelephone) {
      throw new NotFoundException('Phone not found');
    }

    return clientTelephone;
  }

  async update(
    id: string,
    updateClientTelephoneDto: UpdateClientTelephoneDto,
    clientId: string,
  ) {
    if (id !== clientId) {
      throw new UnauthorizedException(
        'Account does not have authorization on the client passed by id',
      );
    }

    const findClientTelephone = await this.clientTelephoneRepository.findOne(
      id,
    );
    if (!findClientTelephone) {
      throw new NotFoundException('Phone not found');
    }

    const clientTelephone = await this.clientTelephoneRepository.update(
      id,
      updateClientTelephoneDto,
    );

    return clientTelephone;
  }

  async remove(id: string, clientId: string) {
    const findClientTelephone = await this.clientTelephoneRepository.findOne(
      clientId,
    );
    const filterClientTelephone = findClientTelephone.filter(
      (item) => item.id === id,
    );
    if (!findClientTelephone) {
      throw new NotFoundException('Phone not found');
    }
    if (id !== filterClientTelephone[0].id) {
      throw new UnauthorizedException(
        'Account does not have authorization on the client passed by id',
      );
    }

    await this.clientTelephoneRepository.delete(id);
    return;
  }
}
