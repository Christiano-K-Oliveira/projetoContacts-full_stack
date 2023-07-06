import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { ContactsRepository } from '../contacts.repository';
import { UpdateUploadDto } from '../../dto/update-upload.dto';
export declare class ContactsInMemoryRepository implements ContactsRepository {
    updateUpload(data: UpdateUploadDto, contact_id: string): Promise<Contact>;
    private database;
    create(data: CreateContactDto, clientId: string): Contact | Promise<Contact>;
    findOne(client_id: string): Contact[] | Promise<Contact[]>;
    findById(id: string): Contact | Promise<Contact>;
    update(id: string, data: UpdateContactDto): Contact | Promise<Contact>;
    delete(id: string): void | Promise<void>;
}
