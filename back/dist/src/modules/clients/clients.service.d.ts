import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './repositories/clients.repository';
export declare class ClientsService {
    private clientsRepository;
    constructor(clientsRepository: ClientsRepository);
    create(createClientDto: CreateClientDto): Promise<import("./entities/client.entity").Client>;
    findOne(id: string, clientId: string): Promise<import("./entities/client.entity").Client>;
    update(id: string, updateClientDto: UpdateClientDto, clientId: string): Promise<import("./entities/client.entity").Client>;
    remove(id: string, clientId: string): Promise<void>;
    findByEmail(email: string): Promise<import("./entities/client.entity").Client>;
}
