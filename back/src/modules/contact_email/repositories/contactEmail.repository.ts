import { CreateContactEmailDto } from '../dto/create-contact_email.dto';
import { UpdateContactEmailDto } from '../dto/update-contact_email.dto';
import { ContactEmail } from '../entities/contact_email.entity';

export abstract class ContactEmailRepository {
  abstract create(
    data: CreateContactEmailDto,
  ): Promise<ContactEmail> | ContactEmail;
  abstract findOne(
    contact_id: string,
  ): Promise<ContactEmail[] | undefined> | ContactEmail[] | undefined;
  abstract update(
    id: string,
    data: UpdateContactEmailDto,
  ): Promise<ContactEmail> | ContactEmail;
  abstract delete(id: string): Promise<void> | void;
  abstract findByContactEmail(
    id: string,
    email: string,
  ): Promise<ContactEmail | undefined> | ContactEmail | undefined;
  abstract findById(
    id: string,
  ): Promise<ContactEmail | undefined> | ContactEmail | undefined;
}
