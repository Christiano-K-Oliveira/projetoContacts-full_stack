import { ClientTelephoneService } from './client_telephone.service';
import { CreateClientTelephoneDto } from './dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from './dto/update-client_telephone.dto';
export declare class ClientTelephoneController {
    private readonly clientTelephoneService;
    constructor(clientTelephoneService: ClientTelephoneService);
    create(createClientTelephoneDto: CreateClientTelephoneDto, req: any): Promise<import("./entities/client_telephone.entity").ClientTelephone>;
    findOne(id: string, req: any): Promise<import("./entities/client_telephone.entity").ClientTelephone[]>;
    update(id: string, updateClientTelephoneDto: UpdateClientTelephoneDto, req: any): Promise<import("./entities/client_telephone.entity").ClientTelephone>;
    remove(id: string, req: any): Promise<void>;
}
