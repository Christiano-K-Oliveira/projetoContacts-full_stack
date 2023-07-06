import { CreateClientTelephoneDto } from '../dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from '../dto/update-client_telephone.dto';
import { ClientTelephone } from '../entities/client_telephone.entity';
export declare abstract class ClientTelephoneRepository {
    abstract create(data: CreateClientTelephoneDto, clientId: string): Promise<ClientTelephone> | ClientTelephone;
    abstract findOne(client_id: string): Promise<ClientTelephone[] | undefined> | ClientTelephone[] | undefined;
    abstract update(id: string, data: UpdateClientTelephoneDto): Promise<ClientTelephone> | ClientTelephone;
    abstract delete(id: string): Promise<void> | void;
    abstract findByClientTelephone(id: string, number: string): Promise<ClientTelephone | undefined> | ClientTelephone | undefined;
}
