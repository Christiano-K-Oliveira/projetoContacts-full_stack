import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientsRepository } from '../clients.repository';
export declare class ClientsInMemoryRepository implements ClientsRepository {
    private database;
    create(data: CreateClientDto): Client | Promise<Client>;
    findOne(id: string): Client | Promise<Client>;
    findByEmail(email: string): Client | Promise<Client>;
    update(id: string, data: UpdateClientDto): Client | Promise<Client>;
    delete(id: string): void | Promise<void>;
}
