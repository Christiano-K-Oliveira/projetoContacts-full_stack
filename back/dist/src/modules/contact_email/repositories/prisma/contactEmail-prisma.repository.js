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
exports.ContactEmailPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const contact_email_entity_1 = require("../../entities/contact_email.entity");
const prisma_service_1 = require("../../../../../database/prisma.service");
const class_transformer_1 = require("class-transformer");
let ContactEmailPrismaRepository = exports.ContactEmailPrismaRepository = class ContactEmailPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const contactEmail = new contact_email_entity_1.ContactEmail();
        Object.assign(contactEmail, Object.assign({}, data));
        const newContactEmail = await this.prisma.contactEmail.create({
            data: Object.assign({}, contactEmail),
        });
        return (0, class_transformer_1.plainToInstance)(contact_email_entity_1.ContactEmail, newContactEmail);
    }
    async findOne(contact_id) {
        const contactEmail = await this.prisma.contactEmail.findMany({
            where: { contact_id },
        });
        return (0, class_transformer_1.plainToInstance)(contact_email_entity_1.ContactEmail, contactEmail);
    }
    async update(id, data) {
        const contactEmail = await this.prisma.contactEmail.update({
            where: { id },
            data: Object.assign({}, data),
        });
        return (0, class_transformer_1.plainToInstance)(contact_email_entity_1.ContactEmail, contactEmail);
    }
    async delete(id) {
        await this.prisma.contactEmail.delete({
            where: { id },
        });
    }
    async findByContactEmail(id, email) {
        const contactEmail = await this.prisma.contactEmail.findFirst({
            where: { id, email },
        });
        return (0, class_transformer_1.plainToInstance)(contact_email_entity_1.ContactEmail, contactEmail);
    }
    async findById(id) {
        const contactEmail = await this.prisma.contactEmail.findFirst({
            where: { id },
        });
        return (0, class_transformer_1.plainToInstance)(contact_email_entity_1.ContactEmail, contactEmail);
    }
};
exports.ContactEmailPrismaRepository = ContactEmailPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactEmailPrismaRepository);
//# sourceMappingURL=contactEmail-prisma.repository.js.map