"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientTelephoneInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const client_telephone_entity_1 = require("../../entities/client_telephone.entity");
let ClientTelephoneInMemoryRepository = exports.ClientTelephoneInMemoryRepository = class ClientTelephoneInMemoryRepository {
    constructor() {
        this.database = [];
    }
    create(data, clientId) {
        const newClient = new client_telephone_entity_1.ClientTelephone();
        Object.assign(newClient, Object.assign(Object.assign({}, data), { client_id: clientId }));
        this.database.push(newClient);
        return newClient;
    }
    findOne(client_id) {
        const clientTelephones = [];
        this.database.map((client) => {
            if (client.client_id === client_id) {
                clientTelephones.push(client);
            }
        });
        return clientTelephones;
    }
    findByClientTelephone(id, number) {
        const findClientTelephone = this.database.find((client) => client.id === id && client.number === number);
        return findClientTelephone;
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
exports.ClientTelephoneInMemoryRepository = ClientTelephoneInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ClientTelephoneInMemoryRepository);
//# sourceMappingURL=clientTelephone.in-memory.repository.js.map