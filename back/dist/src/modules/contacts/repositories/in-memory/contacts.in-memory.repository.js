"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const contact_entity_1 = require("../../entities/contact.entity");
let ContactsInMemoryRepository = exports.ContactsInMemoryRepository = class ContactsInMemoryRepository {
    constructor() {
        this.database = [];
    }
    updateUpload(data, contact_id) {
        console.log(data, contact_id);
        throw new Error('Method not implemented.');
    }
    create(data, clientId) {
        const newContact = new contact_entity_1.Contact();
        Object.assign(newContact, Object.assign(Object.assign({}, data), { email: data.email || null, client_id: clientId }));
        this.database.push(newContact);
        return newContact;
    }
    findOne(client_id) {
        const contacts = [];
        this.database.map((contact) => {
            if (contact.id === client_id) {
                contacts.push(contact);
            }
        });
        return contacts;
    }
    findById(id) {
        const findContact = this.database.find((contact) => contact.client_id === id);
        return findContact;
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
};
exports.ContactsInMemoryRepository = ContactsInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ContactsInMemoryRepository);
//# sourceMappingURL=contacts.in-memory.repository.js.map