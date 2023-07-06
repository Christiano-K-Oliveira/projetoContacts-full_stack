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
exports.ClientTelephonePrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const client_telephone_entity_1 = require("../../entities/client_telephone.entity");
const prisma_service_1 = require("../../../../../database/prisma.service");
const class_transformer_1 = require("class-transformer");
let ClientTelephonePrismaRepository = exports.ClientTelephonePrismaRepository = class ClientTelephonePrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, clientId) {
        const clientTelephone = new client_telephone_entity_1.ClientTelephone();
        Object.assign(clientTelephone, Object.assign({}, data));
        const newClientTelephone = await this.prisma.clientTelephone.create({
            data: Object.assign(Object.assign({}, clientTelephone), { client_id: clientId }),
        });
        return (0, class_transformer_1.plainToInstance)(client_telephone_entity_1.ClientTelephone, newClientTelephone);
    }
    async findOne(client_id) {
        const clientTelephone = await this.prisma.clientTelephone.findMany({
            where: { client_id },
        });
        return (0, class_transformer_1.plainToInstance)(client_telephone_entity_1.ClientTelephone, clientTelephone);
    }
    async update(id, data) {
        const clientTelephone = await this.prisma.clientTelephone.update({
            where: { id },
            data: Object.assign({}, data),
        });
        return (0, class_transformer_1.plainToInstance)(client_telephone_entity_1.ClientTelephone, clientTelephone);
    }
    async delete(id) {
        await this.prisma.clientTelephone.delete({
            where: { id },
        });
    }
    async findByClientTelephone(id, number) {
        const clientTelephone = await this.prisma.clientTelephone.findFirst({
            where: { id, number },
        });
        return (0, class_transformer_1.plainToInstance)(client_telephone_entity_1.ClientTelephone, clientTelephone);
    }
};
exports.ClientTelephonePrismaRepository = ClientTelephonePrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientTelephonePrismaRepository);
//# sourceMappingURL=clientTelephone-prisma.repository.js.map