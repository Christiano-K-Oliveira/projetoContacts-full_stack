import { ClientsRepository } from '../clients.repository';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { PrismaService } from 'database/prisma.service';
export declare class ClientsPrismaRepository implements ClientsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateClientDto): Promise<Client>;
    findOne(id: string): Promise<Client>;
    update(id: string, data: UpdateClientDto): Promise<Client>;
    delete(id: string): Promise<void>;
    findByEmail(email: string): Promise<Client>;
}
