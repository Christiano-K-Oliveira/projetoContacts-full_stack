import { CreateClientTelephoneDto } from '../../dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from '../../dto/update-client_telephone.dto';
import { ClientTelephone } from '../../entities/client_telephone.entity';
import { ClientTelephoneRepository } from '../clientTelephone.repository';
export declare class ClientTelephoneInMemoryRepository implements ClientTelephoneRepository {
    private database;
    create(data: CreateClientTelephoneDto, clientId: string): ClientTelephone | Promise<ClientTelephone>;
    findOne(client_id: string): ClientTelephone[] | Promise<ClientTelephone[]>;
    findByClientTelephone(id: string, number: string): ClientTelephone | Promise<ClientTelephone>;
    update(id: string, data: UpdateClientTelephoneDto): ClientTelephone | Promise<ClientTelephone>;
    delete(id: string): void | Promise<void>;
}
