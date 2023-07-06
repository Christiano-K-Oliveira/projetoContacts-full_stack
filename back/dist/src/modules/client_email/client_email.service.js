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
exports.ClientEmailService = void 0;
const common_1 = require("@nestjs/common");
const clientEmail_repository_1 = require("./repositories/clientEmail.repository");
let ClientEmailService = exports.ClientEmailService = class ClientEmailService {
    constructor(clientEmailRepository) {
        this.clientEmailRepository = clientEmailRepository;
    }
    async create(createClientEmailDto, clientId) {
        const findClientEmail = await this.clientEmailRepository.findByClientEmail(clientId, createClientEmailDto.email);
        if (findClientEmail) {
            throw new common_1.ConflictException('This email is already registered');
        }
        const clientEmail = await this.clientEmailRepository.create(createClientEmailDto, clientId);
        return clientEmail;
    }
    async findOne(id, clientId) {
        if (id !== clientId) {
            throw new common_1.UnauthorizedException('Account does not have authorization on the client passed by id');
        }
        const clientEmail = await this.clientEmailRepository.findOne(id);
        if (!clientEmail) {
            throw new common_1.NotFoundException('Customer email not found');
        }
        return clientEmail;
    }
    async update(id, updateClientEmailDto, clientId) {
        if (id !== clientId) {
            throw new common_1.UnauthorizedException('Account does not have authorization on the client passed by id');
        }
        const findClientEmail = await this.clientEmailRepository.findOne(id);
        if (!findClientEmail) {
            throw new common_1.NotFoundException('Customer email not found');
        }
        const clientEmail = await this.clientEmailRepository.update(id, updateClientEmailDto);
        return clientEmail;
    }
    async remove(id, clientId) {
        const findClientEmail = await this.clientEmailRepository.findOne(clientId);
        const filterFindClientEmail = findClientEmail.filter((item) => item.id === id);
        if (!filterFindClientEmail[0]) {
            throw new common_1.NotFoundException('Customer email not found');
        }
        if (filterFindClientEmail[0].client_id !== clientId) {
            throw new common_1.UnauthorizedException('Account does not have authorization on the client passed by id');
        }
        await this.clientEmailRepository.delete(id);
        return;
    }
};
exports.ClientEmailService = ClientEmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clientEmail_repository_1.ClientEmailRepository])
], ClientEmailService);
//# sourceMappingURL=client_email.service.js.map