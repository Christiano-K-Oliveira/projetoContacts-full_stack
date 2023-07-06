import { CreateContactTelephoneDto } from '../dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from '../dto/update-contact_telephone.dto';
import { ContactTelephone } from '../entities/contact_telephone.entity';
export declare abstract class ContactTelephoneRepository {
    abstract create(data: CreateContactTelephoneDto): Promise<ContactTelephone> | ContactTelephone;
    abstract findOne(contact_id: string): Promise<ContactTelephone[] | undefined> | ContactTelephone[] | undefined;
    abstract update(id: string, data: UpdateContactTelephoneDto): Promise<ContactTelephone> | ContactTelephone;
    abstract delete(id: string): Promise<void> | void;
    abstract findByContactTelephone(id: string, number: string): Promise<ContactTelephone | undefined> | ContactTelephone | undefined;
    abstract findById(id: string): Promise<ContactTelephone | undefined> | ContactTelephone | undefined;
}
