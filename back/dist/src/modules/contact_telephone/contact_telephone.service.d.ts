import { CreateContactTelephoneDto } from './dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from './dto/update-contact_telephone.dto';
import { ContactTelephoneRepository } from './repositories/contactTelephone.repository';
import { ContactsRepository } from '../contacts/repositories/contacts.repository';
export declare class ContactTelephoneService {
    private contactTelephoneRepository;
    private conatctsRepository;
    constructor(contactTelephoneRepository: ContactTelephoneRepository, conatctsRepository: ContactsRepository);
    create(createContactTelephoneDto: CreateContactTelephoneDto): Promise<import("./entities/contact_telephone.entity").ContactTelephone>;
    findOne(id: string, clientId: string): Promise<import("./entities/contact_telephone.entity").ContactTelephone[]>;
    update(id: string, updateContactTelephoneDto: UpdateContactTelephoneDto, clientId: string): Promise<import("./entities/contact_telephone.entity").ContactTelephone>;
    remove(id: string, clientId: string): Promise<void>;
}
