import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(createClientDto: CreateClientDto): Promise<import("./entities/client.entity").Client>;
    findOne(id: string, req: any): Promise<import("./entities/client.entity").Client>;
    update(id: string, updateClientDto: UpdateClientDto, req: any): Promise<import("./entities/client.entity").Client>;
    remove(id: string, req: any): Promise<void>;
}
