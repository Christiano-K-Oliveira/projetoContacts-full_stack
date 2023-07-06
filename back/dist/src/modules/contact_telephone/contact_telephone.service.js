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
exports.ContactTelephoneService = void 0;
const common_1 = require("@nestjs/common");
const contactTelephone_repository_1 = require("./repositories/contactTelephone.repository");
const contacts_repository_1 = require("../contacts/repositories/contacts.repository");
let ContactTelephoneService = exports.ContactTelephoneService = class ContactTelephoneService {
    constructor(contactTelephoneRepository, conatctsRepository) {
        this.contactTelephoneRepository = contactTelephoneRepository;
        this.conatctsRepository = conatctsRepository;
    }
    async create(createContactTelephoneDto) {
        const findContactTelephone = await this.contactTelephoneRepository.findByContactTelephone(createContactTelephoneDto.contact_id, createContactTelephoneDto.number);
        if (findContactTelephone) {
            throw new common_1.ConflictException('The phone in this contact already exists');
        }
        const contactTelephone = await this.contactTelephoneRepository.create(createContactTelephoneDto);
        return contactTelephone;
    }
    async findOne(id, clientId) {
        const contactTelephone = await this.contactTelephoneRepository.findOne(id);
        const filterContactTelephone = contactTelephone.filter((contact) => contact.contact_id === id);
        const findContact = await this.conatctsRepository.findById(filterContactTelephone[0].contact_id);
        if (findContact.client_id !== clientId) {
            throw new common_1.UnauthorizedException('Contact does not belong to this customer');
        }
        if (!filterContactTelephone) {
            throw new common_1.NotFoundException('Phone not found');
        }
        return filterContactTelephone;
    }
    async update(id, updateContactTelephoneDto, clientId) {
        const findContactTelephone = await this.contactTelephoneRepository.findOne(id);
        const filterContactTelephone = findContactTelephone.filter((contact) => contact.contact_id === id);
        const findContact = await this.conatctsRepository.findById(filterContactTelephone[0].contact_id);
        if (findContact.client_id !== clientId) {
            throw new common_1.UnauthorizedException('Contact does not belong to this customer');
        }
        if (!filterContactTelephone) {
            throw new common_1.NotFoundException('Phone not found');
        }
        const contactTelephone = await this.contactTelephoneRepository.update(id, updateContactTelephoneDto);
        return contactTelephone;
    }
    async remove(id, clientId) {
        const findContactTelephone = await this.contactTelephoneRepository.findById(id);
        if (!findContactTelephone) {
            throw new common_1.NotFoundException('Phone not found');
        }
        const findContact = await this.conatctsRepository.findById(findContactTelephone.contact_id);
        if (findContact.client_id !== clientId) {
            throw new common_1.UnauthorizedException('Contact does not belong to this customer');
        }
        await this.contactTelephoneRepository.delete(id);
        return;
    }
};
exports.ContactTelephoneService = ContactTelephoneService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contactTelephone_repository_1.ContactTelephoneRepository,
        contacts_repository_1.ContactsRepository])
], ContactTelephoneService);
//# sourceMappingURL=contact_telephone.service.js.map