"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactTelephoneInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const contact_telephone_entity_1 = require("../../entities/contact_telephone.entity");
let ContactTelephoneInMemoryRepository = exports.ContactTelephoneInMemoryRepository = class ContactTelephoneInMemoryRepository {
    constructor() {
        this.database = [];
    }
    create(data) {
        const newContactTelephone = new contact_telephone_entity_1.ContactTelephone();
        Object.assign(newContactTelephone, Object.assign({}, data));
        this.database.push(newContactTelephone);
        return newContactTelephone;
    }
    findOne(contact_id) {
        const contactTelephones = [];
        this.database.map((contact) => {
            if (contact.contact_id === contact_id) {
                contactTelephones.push(contact);
            }
        });
        return contactTelephones;
    }
    findByContactTelephone(id, telephone) {
        const findContactTelephone = this.database.find((contact) => contact.contact_id === id && contact.number === telephone);
        return findContactTelephone;
    }
    update(id, data) {
        const contactIndex = this.database.findIndex((contact) => contact.id === id);
        this.database[contactIndex] = Object.assign(Object.assign({}, this.database[contactIndex]), data);
        return this.database[contactIndex];
    }
    delete(id) {
        const contactIndex = this.database.findIndex((contact) => contact.id === id);
        this.database.splice(contactIndex, 1);
    }
    findById(id) {
        const findContactTelephone = this.database.find((contact) => contact.contact_id === id);
        return findContactTelephone;
    }
};
exports.ContactTelephoneInMemoryRepository = ContactTelephoneInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ContactTelephoneInMemoryRepository);
//# sourceMappingURL=contactTelephone.in-memory.repository.js.map