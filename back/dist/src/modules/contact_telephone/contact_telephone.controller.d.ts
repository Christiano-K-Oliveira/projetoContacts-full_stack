import { ContactTelephoneService } from './contact_telephone.service';
import { CreateContactTelephoneDto } from './dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from './dto/update-contact_telephone.dto';
export declare class ContactTelephoneController {
    private readonly contactTelephoneService;
    constructor(contactTelephoneService: ContactTelephoneService);
    create(createContactTelephoneDto: CreateContactTelephoneDto): Promise<import("./entities/contact_telephone.entity").ContactTelephone>;
    findOne(id: string, req: any): Promise<import("./entities/contact_telephone.entity").ContactTelephone[]>;
    update(id: string, updateContactTelephoneDto: UpdateContactTelephoneDto, req: any): Promise<import("./entities/contact_telephone.entity").ContactTelephone>;
    remove(id: string, req: any): Promise<void>;
}
