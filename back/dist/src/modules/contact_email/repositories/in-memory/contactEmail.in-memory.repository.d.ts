import { CreateContactEmailDto } from '../../dto/create-contact_email.dto';
import { UpdateContactEmailDto } from '../../dto/update-contact_email.dto';
import { ContactEmail } from '../../entities/contact_email.entity';
import { ContactEmailRepository } from '../contactEmail.repository';
export declare class ContactEmailInMemoryRepository implements ContactEmailRepository {
    private database;
    create(data: CreateContactEmailDto): ContactEmail | Promise<ContactEmail>;
    findOne(contact_id: string): ContactEmail[] | Promise<[ContactEmail]>;
    findByContactEmail(id: string, email: string): ContactEmail | Promise<ContactEmail>;
    update(id: string, data: UpdateContactEmailDto): ContactEmail | Promise<ContactEmail>;
    delete(id: string): void | Promise<void>;
    findById(id: string): ContactEmail | Promise<ContactEmail>;
}
