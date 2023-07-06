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
exports.ContactEmailService = void 0;
const common_1 = require("@nestjs/common");
const contactEmail_repository_1 = require("./repositories/contactEmail.repository");
const contacts_repository_1 = require("../contacts/repositories/contacts.repository");
let ContactEmailService = exports.ContactEmailService = class ContactEmailService {
    constructor(contactEmailRepository, contactsRepository) {
        this.contactEmailRepository = contactEmailRepository;
        this.contactsRepository = contactsRepository;
    }
    async create(createContactEmailDto, clientId) {
        const findContactEmail = await this.contactEmailRepository.findByContactEmail(createContactEmailDto.contact_id, createContactEmailDto.email);
        const findContact = await this.contactsRepository.findById(createContactEmailDto.contact_id);
        if (findContact.client_id !== clientId) {
            throw new common_1.UnauthorizedException('Contact does not belong to this customer');
        }
        if (findContactEmail) {
            throw new common_1.ConflictException('The email in this contact already exists');
        }
        const contactEmail = await this.contactEmailRepository.create(createContactEmailDto);
        return contactEmail;
    }
    async findOne(id, clientId) {
        const contactEmail = await this.contactEmailRepository.findOne(id);
        const filterContactEmail = contactEmail.filter((contact) => contact.contact_id === id);
        const findContact = await this.contactsRepository.findById(filterContactEmail[0].contact_id);
        if (findContact.client_id !== clientId) {
            throw new common_1.UnauthorizedException('Contact does not belong to this customer');
        }
        if (!filterContactEmail) {
            throw new common_1.NotFoundException('Email not found');
        }
        return filterContactEmail;
    }
    async update(id, updateContactEmailDto, clientId) {
        const findContactEmail = await this.contactEmailRepository.findOne(id);
        const filterContactEmail = findContactEmail.filter((contact) => contact.contact_id === id);
        const findContact = await this.contactsRepository.findById(filterContactEmail[0].contact_id);
        if (findContact.client_id !== clientId) {
            throw new common_1.UnauthorizedException('Contact does not belong to this customer');
        }
        if (!filterContactEmail) {
            throw new common_1.NotFoundException('Email not found');
        }
        const contactEmail = await this.contactEmailRepository.update(id, updateContactEmailDto);
        return contactEmail;
    }
    async remove(id, clientId) {
        const findContactEmail = await this.contactEmailRepository.findById(id);
        if (!findContactEmail) {
            throw new common_1.NotFoundException('Email not found');
        }
        const findContact = await this.contactsRepository.findById(findContactEmail.contact_id);
        if (findContact.client_id !== clientId) {
            throw new common_1.UnauthorizedException('Contact does not belong to this customer');
        }
        await this.contactEmailRepository.delete(id);
        return;
    }
};
exports.ContactEmailService = ContactEmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contactEmail_repository_1.ContactEmailRepository,
        contacts_repository_1.ContactsRepository])
], ContactEmailService);
//# sourceMappingURL=contact_email.service.js.map