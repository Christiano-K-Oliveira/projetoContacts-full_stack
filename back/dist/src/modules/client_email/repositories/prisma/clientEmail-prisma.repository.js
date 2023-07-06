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
exports.ClientEmailPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../database/prisma.service");
const client_email_entity_1 = require("../../entities/client_email.entity");
const class_transformer_1 = require("class-transformer");
let ClientEmailPrismaRepository = exports.ClientEmailPrismaRepository = class ClientEmailPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, clientId) {
        const clientEmail = new client_email_entity_1.ClientEmail();
        Object.assign(clientEmail, Object.assign({}, data));
        const newClientEmail = await this.prisma.clientEmail.create({
            data: Object.assign(Object.assign({}, clientEmail), { client_id: clientId }),
        });
        return (0, class_transformer_1.plainToInstance)(client_email_entity_1.ClientEmail, newClientEmail);
    }
    async findOne(client_id) {
        const clientEmail = await this.prisma.clientEmail.findMany({
            where: { client_id },
        });
        return (0, class_transformer_1.plainToInstance)(client_email_entity_1.ClientEmail, clientEmail);
    }
    async update(id, data) {
        const clientEmail = await this.prisma.clientEmail.update({
            where: { id },
            data: Object.assign({}, data),
        });
        return (0, class_transformer_1.plainToInstance)(client_email_entity_1.ClientEmail, clientEmail);
    }
    async delete(id) {
        await this.prisma.clientEmail.delete({
            where: { id },
        });
    }
    async findByClientEmail(id, email) {
        const clientEmail = await this.prisma.clientEmail.findFirst({
            where: { id, email },
        });
        return (0, class_transformer_1.plainToInstance)(client_email_entity_1.ClientEmail, clientEmail);
    }
};
exports.ClientEmailPrismaRepository = ClientEmailPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientEmailPrismaRepository);
//# sourceMappingURL=clientEmail-prisma.repository.js.map