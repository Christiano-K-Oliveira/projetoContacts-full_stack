import { ClientTelephoneRepository } from '../clientTelephone.repository';
import { CreateClientTelephoneDto } from '../../dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from '../../dto/update-client_telephone.dto';
import { ClientTelephone } from '../../entities/client_telephone.entity';
import { PrismaService } from 'database/prisma.service';
export declare class ClientTelephonePrismaRepository implements ClientTelephoneRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateClientTelephoneDto, clientId: string): Promise<ClientTelephone>;
    findOne(client_id: string): Promise<ClientTelephone[]>;
    update(id: string, data: UpdateClientTelephoneDto): Promise<ClientTelephone>;
    delete(id: string): Promise<void>;
    findByClientTelephone(id: string, number: string): Promise<ClientTelephone>;
}
