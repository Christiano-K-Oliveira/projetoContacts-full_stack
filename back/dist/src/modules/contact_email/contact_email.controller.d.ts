import { ContactEmailService } from './contact_email.service';
import { CreateContactEmailDto } from './dto/create-contact_email.dto';
import { UpdateContactEmailDto } from './dto/update-contact_email.dto';
export declare class ContactEmailController {
    private readonly contactEmailService;
    constructor(contactEmailService: ContactEmailService);
    create(createContactEmailDto: CreateContactEmailDto, req: any): Promise<import("./entities/contact_email.entity").ContactEmail>;
    findOne(id: string, req: any): Promise<import("./entities/contact_email.entity").ContactEmail[]>;
    update(id: string, updateContactEmailDto: UpdateContactEmailDto, req: any): Promise<import("./entities/contact_email.entity").ContactEmail>;
    remove(id: string, req: any): Promise<void>;
}
