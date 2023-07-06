import { CreateClientEmailDto } from '../dto/create-client_email.dto';
import { UpdateClientEmailDto } from '../dto/update-client_email.dto';
import { ClientEmail } from '../entities/client_email.entity';
export declare abstract class ClientEmailRepository {
    abstract create(data: CreateClientEmailDto, clientId: string): Promise<ClientEmail> | ClientEmail;
    abstract findOne(client_id: string): Promise<ClientEmail[] | undefined> | ClientEmail[] | undefined;
    abstract update(id: string, data: UpdateClientEmailDto): Promise<ClientEmail> | ClientEmail;
    abstract delete(id: string): Promise<void> | void;
    abstract findByClientEmail(id: string, email: string): Promise<ClientEmail | undefined> | ClientEmail | undefined;
}
