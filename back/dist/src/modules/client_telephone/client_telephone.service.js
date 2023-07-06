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
exports.ClientTelephoneService = void 0;
const common_1 = require("@nestjs/common");
const clientTelephone_repository_1 = require("./repositories/clientTelephone.repository");
let ClientTelephoneService = exports.ClientTelephoneService = class ClientTelephoneService {
    constructor(clientTelephoneRepository) {
        this.clientTelephoneRepository = clientTelephoneRepository;
    }
    async create(createClientTelephoneDto, clientId) {
        const findClientTelephone = await this.clientTelephoneRepository.findByClientTelephone(clientId, createClientTelephoneDto.number);
        if (findClientTelephone) {
            throw new common_1.ConflictException('This phone is already registered');
        }
        const clientTelephone = await this.clientTelephoneRepository.create(createClientTelephoneDto, clientId);
        return clientTelephone;
    }
    async findOne(id, clientId) {
        if (id !== clientId) {
            throw new common_1.UnauthorizedException('Account does not have authorization on the client passed by id');
        }
        const clientTelephone = await this.clientTelephoneRepository.findOne(id);
        if (!clientTelephone) {
            throw new common_1.NotFoundException('Phone not found');
        }
        return clientTelephone;
    }
    async update(id, updateClientTelephoneDto, clientId) {
        if (id !== clientId) {
            throw new common_1.UnauthorizedException('Account does not have authorization on the client passed by id');
        }
        const findClientTelephone = await this.clientTelephoneRepository.findOne(id);
        if (!findClientTelephone) {
            throw new common_1.NotFoundException('Phone not found');
        }
        const clientTelephone = await this.clientTelephoneRepository.update(id, updateClientTelephoneDto);
        return clientTelephone;
    }
    async remove(id, clientId) {
        const findClientTelephone = await this.clientTelephoneRepository.findOne(clientId);
        const filterClientTelephone = findClientTelephone.filter((item) => item.id === id);
        if (!findClientTelephone) {
            throw new common_1.NotFoundException('Phone not found');
        }
        if (id !== filterClientTelephone[0].id) {
            throw new common_1.UnauthorizedException('Account does not have authorization on the client passed by id');
        }
        await this.clientTelephoneRepository.delete(id);
        return;
    }
};
exports.ClientTelephoneService = ClientTelephoneService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clientTelephone_repository_1.ClientTelephoneRepository])
], ClientTelephoneService);
//# sourceMappingURL=client_telephone.service.js.map