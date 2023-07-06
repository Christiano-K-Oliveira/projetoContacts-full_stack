import { ClientsService } from '../clients/clients.service';
import { JwtService } from '@nestjs/jwt';
import { ContactsService } from '../contacts/contacts.service';
export declare class AuthService {
    private clientService;
    private contactService;
    private jwtService;
    constructor(clientService: ClientsService, contactService: ContactsService, jwtService: JwtService);
    validateClient(clientEmail: string, clientPassword: string): Promise<{
        email: string;
    }>;
    login(email: string): Promise<{
        token: string;
        id: string;
    }>;
}
