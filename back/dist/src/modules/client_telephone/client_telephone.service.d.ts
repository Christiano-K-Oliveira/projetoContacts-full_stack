import { CreateClientTelephoneDto } from './dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from './dto/update-client_telephone.dto';
import { ClientTelephoneRepository } from './repositories/clientTelephone.repository';
export declare class ClientTelephoneService {
    private clientTelephoneRepository;
    constructor(clientTelephoneRepository: ClientTelephoneRepository);
    create(createClientTelephoneDto: CreateClientTelephoneDto, clientId: string): Promise<import("./entities/client_telephone.entity").ClientTelephone>;
    findOne(id: string, clientId: string): Promise<import("./entities/client_telephone.entity").ClientTelephone[]>;
    update(id: string, updateClientTelephoneDto: UpdateClientTelephoneDto, clientId: string): Promise<import("./entities/client_telephone.entity").ClientTelephone>;
    remove(id: string, clientId: string): Promise<void>;
}
