import { CreateContactEmailDto } from './dto/create-contact_email.dto';
import { UpdateContactEmailDto } from './dto/update-contact_email.dto';
import { ContactEmailRepository } from './repositories/contactEmail.repository';
import { ContactsRepository } from '../contacts/repositories/contacts.repository';
export declare class ContactEmailService {
    private contactEmailRepository;
    private contactsRepository;
    constructor(contactEmailRepository: ContactEmailRepository, contactsRepository: ContactsRepository);
    create(createContactEmailDto: CreateContactEmailDto, clientId: string): Promise<import("./entities/contact_email.entity").ContactEmail>;
    findOne(id: string, clientId: string): Promise<import("./entities/contact_email.entity").ContactEmail[]>;
    update(id: string, updateContactEmailDto: UpdateContactEmailDto, clientId: string): Promise<import("./entities/contact_email.entity").ContactEmail>;
    remove(id: string, clientId: string): Promise<void>;
}
