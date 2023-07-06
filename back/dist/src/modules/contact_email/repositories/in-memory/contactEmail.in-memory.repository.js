"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEmailInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const contact_email_entity_1 = require("../../entities/contact_email.entity");
let ContactEmailInMemoryRepository = exports.ContactEmailInMemoryRepository = class ContactEmailInMemoryRepository {
    constructor() {
        this.database = [];
    }
    create(data) {
        const newContactEmail = new contact_email_entity_1.ContactEmail();
        Object.assign(newContactEmail, Object.assign({}, data));
        this.database.push(newContactEmail);
        return newContactEmail;
    }
    findOne(contact_id) {
        const contactEmails = [];
        this.database.map((contactEmail) => {
            if (contactEmail.contact_id === contact_id) {
                contactEmails.push(contactEmail);
            }
        });
        return contactEmails;
    }
    findByContactEmail(id, email) {
        const findContactEmail = this.database.find((contactEmail) => contactEmail.contact_id === id && contactEmail.email === email);
        return findContactEmail;
    }
    update(id, data) {
        const contactEmailIndex = this.database.findIndex((contactEmail) => contactEmail.id === id);
        this.database[contactEmailIndex] = Object.assign(Object.assign({}, this.database[contactEmailIndex]), data);
        return this.database[contactEmailIndex];
    }
    delete(id) {
        const contactEmailIndex = this.database.findIndex((contactEmail) => contactEmail.id === id);
        this.database.splice(contactEmailIndex, 1);
    }
    findById(id) {
        const findContactEmail = this.database.find((contactEmail) => contactEmail.id === id);
        return findContactEmail;
    }
};
exports.ContactEmailInMemoryRepository = ContactEmailInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ContactEmailInMemoryRepository);
//# sourceMappingURL=contactEmail.in-memory.repository.js.map