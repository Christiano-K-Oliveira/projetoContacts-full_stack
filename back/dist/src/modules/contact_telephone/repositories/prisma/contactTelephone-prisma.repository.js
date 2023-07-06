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
exports.ContactTelephonePrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../../database/prisma.service");
const contact_telephone_entity_1 = require("../../entities/contact_telephone.entity");
const class_transformer_1 = require("class-transformer");
let ContactTelephonePrismaRepository = exports.ContactTelephonePrismaRepository = class ContactTelephonePrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const contactTelephone = new contact_telephone_entity_1.ContactTelephone();
        Object.assign(contactTelephone, Object.assign({}, data));
        const newContactTelephone = await this.prisma.contactTelephone.create({
            data: Object.assign({}, contactTelephone),
        });
        return (0, class_transformer_1.plainToInstance)(contact_telephone_entity_1.ContactTelephone, newContactTelephone);
    }
    async findOne(contact_id) {
        const contactTelephones = await this.prisma.contactTelephone.findMany({
            where: { contact_id },
        });
        return (0, class_transformer_1.plainToInstance)(contact_telephone_entity_1.ContactTelephone, contactTelephones);
    }
    async update(id, data) {
        const contactTelephone = await this.prisma.contactTelephone.update({
            where: { id },
            data: Object.assign({}, data),
        });
        return (0, class_transformer_1.plainToInstance)(contact_telephone_entity_1.ContactTelephone, contactTelephone);
    }
    async delete(id) {
        await this.prisma.contactTelephone.delete({
            where: { id },
        });
    }
    async findByContactTelephone(id, number) {
        const contactTelephone = await this.prisma.contactTelephone.findFirst({
            where: { id, number },
        });
        return (0, class_transformer_1.plainToInstance)(contact_telephone_entity_1.ContactTelephone, contactTelephone);
    }
    async findById(id) {
        const contactTelephone = await this.prisma.contactTelephone.findFirst({
            where: { id },
        });
        return (0, class_transformer_1.plainToInstance)(contact_telephone_entity_1.ContactTelephone, contactTelephone);
    }
};
exports.ContactTelephonePrismaRepository = ContactTelephonePrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactTelephonePrismaRepository);
//# sourceMappingURL=contactTelephone-prisma.repository.js.map