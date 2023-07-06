"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const clients_service_1 = require("../clients/clients.service");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const contacts_service_1 = require("../contacts/contacts.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(clientService, contactService, jwtService) {
        this.clientService = clientService;
        this.contactService = contactService;
        this.jwtService = jwtService;
    }
    async validateClient(clientEmail, clientPassword) {
        const client = await this.clientService.findByEmail(clientEmail);
        if (client) {
            const passwordMatch = await (0, bcryptjs_1.compare)(clientPassword, client.password);
            if (passwordMatch) {
                return { email: client.email };
            }
        }
        return null;
    }
    async login(email) {
        const client = await this.clientService.findByEmail(email);
        return {
            token: this.jwtService.sign({ email }, { subject: client.id }),
            id: client.id,
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clients_service_1.ClientsService,
        contacts_service_1.ContactsService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map