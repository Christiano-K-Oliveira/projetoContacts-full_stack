import { ContactEmailRepository } from '../contactEmail.repository';
import { CreateContactEmailDto } from '../../dto/create-contact_email.dto';
import { UpdateContactEmailDto } from '../../dto/update-contact_email.dto';
import { ContactEmail } from '../../entities/contact_email.entity';
import { PrismaService } from 'database/prisma.service';
export declare class ContactEmailPrismaRepository implements ContactEmailRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateContactEmailDto): Promise<ContactEmail>;
    findOne(contact_id: string): Promise<ContactEmail[]>;
    update(id: string, data: UpdateContactEmailDto): Promise<ContactEmail>;
    delete(id: string): Promise<void>;
    findByContactEmail(id: string, email: string): Promise<ContactEmail>;
    findById(id: string): Promise<ContactEmail>;
}
