import { ClientEmailRepository } from '../clientEmail.repository';
import { PrismaService } from 'database/prisma.service';
import { CreateClientEmailDto } from '../../dto/create-client_email.dto';
import { UpdateClientEmailDto } from '../../dto/update-client_email.dto';
import { ClientEmail } from '../../entities/client_email.entity';
export declare class ClientEmailPrismaRepository implements ClientEmailRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateClientEmailDto, clientId: string): Promise<ClientEmail>;
    findOne(client_id: string): Promise<ClientEmail[]>;
    update(id: string, data: UpdateClientEmailDto): Promise<ClientEmail>;
    delete(id: string): Promise<void>;
    findByClientEmail(id: string, email: string): Promise<ClientEmail>;
}
