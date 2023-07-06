"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEmailInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const client_email_entity_1 = require("../../entities/client_email.entity");
let ClientEmailInMemoryRepository = exports.ClientEmailInMemoryRepository = class ClientEmailInMemoryRepository {
    constructor() {
        this.database = [];
    }
    create(data, clientId) {
        const newClientEmail = new client_email_entity_1.ClientEmail();
        Object.assign(newClientEmail, Object.assign(Object.assign({}, data), { client_id: clientId }));
        this.database.push(newClientEmail);
        return newClientEmail;
    }
    findOne(client_id) {
        const clientEmails = [];
        this.database.map((client) => {
            if (client.client_id === client_id) {
                clientEmails.push(client);
            }
        });
        return clientEmails;
    }
    findByClientEmail(id, email) {
        const clientEmail = this.database.find((client) => client.id === id && client.email === email);
        return clientEmail;
    }
    update(id, data) {
        const clientIndex = this.database.findIndex((client) => client.id === id);
        this.database[clientIndex] = Object.assign(Object.assign({}, this.database[clientIndex]), data);
        return this.database[clientIndex];
    }
    delete(id) {
        const clientIndex = this.database.findIndex((client) => client.id === id);
        this.database.splice(clientIndex, 1);
    }
};
exports.ClientEmailInMemoryRepository = ClientEmailInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ClientEmailInMemoryRepository);
//# sourceMappingURL=clientEmail.in-memory.repository.js.map