import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { UpdateUploadDto } from '../dto/update-upload.dto';
import { Contact } from '../entities/contact.entity';
export declare abstract class ContactsRepository {
    abstract create(data: CreateContactDto, clientId: string): Promise<Contact> | Contact;
    abstract findOne(client_id: string): Promise<Contact[] | undefined> | Contact[] | undefined;
    abstract update(id: string, data: UpdateContactDto): Promise<Contact> | Contact;
    abstract delete(id: string): Promise<void> | void;
    abstract findById(id: string): Promise<Contact | undefined> | Contact | undefined;
    abstract updateUpload(data: UpdateUploadDto, contact_id: string): Promise<Contact>;
}
