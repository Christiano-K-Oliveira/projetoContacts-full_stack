import { ContactTelephoneRepository } from '../contactTelephone.repository';
import { PrismaService } from 'database/prisma.service';
import { CreateContactTelephoneDto } from '../../dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from '../../dto/update-contact_telephone.dto';
import { ContactTelephone } from '../../entities/contact_telephone.entity';
export declare class ContactTelephonePrismaRepository implements ContactTelephoneRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateContactTelephoneDto): Promise<ContactTelephone>;
    findOne(contact_id: string): Promise<ContactTelephone[]>;
    update(id: string, data: UpdateContactTelephoneDto): Promise<ContactTelephone>;
    delete(id: string): Promise<void>;
    findByContactTelephone(id: string, number: string): Promise<ContactTelephone>;
    findById(id: string): Promise<ContactTelephone>;
}
