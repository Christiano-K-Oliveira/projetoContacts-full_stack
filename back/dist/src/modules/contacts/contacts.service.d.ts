/// <reference types="multer" />
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';
export declare class ContactsService {
    private contactsRepository;
    constructor(contactsRepository: ContactsRepository);
    create(createContactDto: CreateContactDto, clientId: string): Promise<import("./entities/contact.entity").Contact>;
    findOne(id: string, clientId: string): Promise<import("./entities/contact.entity").Contact[]>;
    update(id: string, updateContactDto: UpdateContactDto, clientId: string): Promise<import("./entities/contact.entity").Contact>;
    remove(id: string, clientId: string): Promise<void>;
    upload(cover_image: Express.Multer.File, contact: Express.Multer.File, contact_id: string): Promise<import("./entities/contact.entity").Contact>;
}
