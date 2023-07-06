import { CreateClientEmailDto } from '../../dto/create-client_email.dto';
import { UpdateClientEmailDto } from '../../dto/update-client_email.dto';
import { ClientEmail } from '../../entities/client_email.entity';
import { ClientEmailRepository } from '../clientEmail.repository';
export declare class ClientEmailInMemoryRepository implements ClientEmailRepository {
    private database;
    create(data: CreateClientEmailDto, clientId: string): ClientEmail | Promise<ClientEmail>;
    findOne(client_id: string): ClientEmail[] | Promise<ClientEmail[]>;
    findByClientEmail(id: string, email: string): ClientEmail | Promise<ClientEmail>;
    update(id: string, data: UpdateClientEmailDto): ClientEmail | Promise<ClientEmail>;
    delete(id: string): void | Promise<void>;
}
