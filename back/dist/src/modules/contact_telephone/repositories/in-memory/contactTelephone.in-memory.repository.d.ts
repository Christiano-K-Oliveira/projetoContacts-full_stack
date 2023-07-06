import { CreateContactTelephoneDto } from '../../dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from '../../dto/update-contact_telephone.dto';
import { ContactTelephone } from '../../entities/contact_telephone.entity';
import { ContactTelephoneRepository } from '../contactTelephone.repository';
export declare class ContactTelephoneInMemoryRepository implements ContactTelephoneRepository {
    private database;
    create(data: CreateContactTelephoneDto): ContactTelephone | Promise<ContactTelephone>;
    findOne(contact_id: string): ContactTelephone[] | Promise<ContactTelephone[]>;
    findByContactTelephone(id: string, telephone: string): ContactTelephone | Promise<ContactTelephone>;
    update(id: string, data: UpdateContactTelephoneDto): ContactTelephone | Promise<ContactTelephone>;
    delete(id: string): void | Promise<void>;
    findById(id: string): ContactTelephone | Promise<ContactTelephone>;
}
