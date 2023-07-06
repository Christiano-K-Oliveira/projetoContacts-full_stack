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
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const contacts_repository_1 = require("./repositories/contacts.repository");
const cloudinary_1 = require("cloudinary");
const node_fs_1 = require("node:fs");
let ContactsService = exports.ContactsService = class ContactsService {
    constructor(contactsRepository) {
        this.contactsRepository = contactsRepository;
    }
    async create(createContactDto, clientId) {
        const findContact = await this.contactsRepository.findById(clientId);
        if (findContact) {
            throw new common_1.ConflictException('This customer already has this contact');
        }
        const contact = await this.contactsRepository.create(createContactDto, clientId);
        return contact;
    }
    async findOne(id, clientId) {
        const contact = await this.contactsRepository.findOne(id);
        console.log(contact);
        const filterContact = contact.filter((contact) => contact.client_id === clientId);
        if (!filterContact) {
            throw new common_1.NotFoundException('Contact Not Found');
        }
        if (filterContact[0].client_id !== clientId) {
            throw new common_1.UnauthorizedException('Account is not authorized for a contact on this client');
        }
        return filterContact;
    }
    async update(id, updateContactDto, clientId) {
        const findContact = await this.contactsRepository.findOne(id);
        const filterContact = findContact.filter((contact) => contact.client_id === clientId);
        if (filterContact[0].client_id !== clientId) {
            throw new common_1.UnauthorizedException('Account is not authorized for a contact on this client');
        }
        if (!filterContact) {
            throw new common_1.NotFoundException('Contact Not Found');
        }
        const contact = await this.contactsRepository.update(id, updateContactDto);
        return contact;
    }
    async remove(id, clientId) {
        const findContact = await this.contactsRepository.findOne(clientId);
        const filterContact = findContact.filter((contact) => contact.client_id === clientId);
        if (!filterContact) {
            throw new common_1.NotFoundException('Contact Not Found');
        }
        if (filterContact[0].client_id !== clientId) {
            throw new common_1.UnauthorizedException('Account is not authorized for a contact on this client');
        }
        await this.contactsRepository.delete(id);
        return;
    }
    async upload(cover_image, contact, contact_id) {
        cloudinary_1.v2.config({
            cloud_name: 'dgskdps1l',
            api_key: '935583466128746',
            api_secret: '1SY31zQo5kNld_RY7Mk_WyMZ1Lo',
        });
        const findContact = await this.contactsRepository.findOne(contact_id);
        if (!findContact) {
            throw new common_1.NotFoundException('Contact not found');
        }
        const uploadImage = await cloudinary_1.v2.uploader.upload(cover_image.path, { resource_type: 'image' }, (error, result) => {
            return result;
        });
        const uploadContact = await cloudinary_1.v2.uploader.upload(contact.path, { resource_type: 'video' }, (error, result) => {
            return result;
        });
        const updateImage = await this.contactsRepository.updateUpload({
            name: uploadImage.secure_url,
            telephone: uploadContact.secure_url,
        }, contact_id);
        (0, node_fs_1.unlink)(cover_image.path, (error) => {
            if (error)
                console.log(error);
        });
        (0, node_fs_1.unlink)(contact.path, (error) => {
            if (error)
                console.log(error);
        });
        return updateImage;
    }
};
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contacts_repository_1.ContactsRepository])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map