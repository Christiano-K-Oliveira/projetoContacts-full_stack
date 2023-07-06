import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from 'database/prisma.service';
import { UpdateUploadDto } from '../../dto/update-upload.dto';
export declare class ContactsPrismaRepository implements ContactsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateContactDto, clientId: string): Promise<Contact>;
    findOne(client_id: string): Promise<Contact[]>;
    update(id: string, data: UpdateContactDto): Promise<Contact>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Contact>;
    updateUpload(data: UpdateUploadDto, contact_id: string): Promise<Contact>;
}
