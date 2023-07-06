import { CreateClientEmailDto } from './dto/create-client_email.dto';
import { UpdateClientEmailDto } from './dto/update-client_email.dto';
import { ClientEmailRepository } from './repositories/clientEmail.repository';
export declare class ClientEmailService {
    private clientEmailRepository;
    constructor(clientEmailRepository: ClientEmailRepository);
    create(createClientEmailDto: CreateClientEmailDto, clientId: string): Promise<import("./entities/client_email.entity").ClientEmail>;
    findOne(id: string, clientId: string): Promise<import("./entities/client_email.entity").ClientEmail[]>;
    update(id: string, updateClientEmailDto: UpdateClientEmailDto, clientId: string): Promise<import("./entities/client_email.entity").ClientEmail>;
    remove(id: string, clientId: string): Promise<void>;
}
