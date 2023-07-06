import { ClientEmailService } from './client_email.service';
import { CreateClientEmailDto } from './dto/create-client_email.dto';
import { UpdateClientEmailDto } from './dto/update-client_email.dto';
export declare class ClientEmailController {
    private readonly clientEmailService;
    constructor(clientEmailService: ClientEmailService);
    create(createClientEmailDto: CreateClientEmailDto, req: any): Promise<import("./entities/client_email.entity").ClientEmail>;
    findOne(id: string, req: any): Promise<import("./entities/client_email.entity").ClientEmail[]>;
    update(id: string, updateClientEmailDto: UpdateClientEmailDto, req: any): Promise<import("./entities/client_email.entity").ClientEmail>;
    remove(id: string, req: any): Promise<void>;
}
