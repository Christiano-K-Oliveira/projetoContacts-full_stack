"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsInMemoryRepository = void 0;
const class_transformer_1 = require("class-transformer");
const client_entity_1 = require("../../entities/client.entity");
const common_1 = require("@nestjs/common");
let ClientsInMemoryRepository = exports.ClientsInMemoryRepository = class ClientsInMemoryRepository {
    constructor() {
        this.database = [];
    }
    create(data) {
        const newClient = new client_entity_1.Client();
        Object.assign(newClient, Object.assign({}, data));
        this.database.push(newClient);
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, newClient);
    }
    findOne(id) {
        const client = this.database.find((client) => client.id === id);
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, client);
    }
    findByEmail(email) {
        const client = this.database.find((client) => client.email === email);
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, client);
    }
    update(id, data) {
        const clientIndex = this.database.findIndex((client) => client.id === id);
        this.database[clientIndex] = Object.assign(Object.assign({}, this.database[clientIndex]), data);
        return (0, class_transformer_1.plainToInstance)(client_entity_1.Client, this.database[clientIndex]);
    }
    delete(id) {
        const clientIndex = this.database.findIndex((client) => client.id === id);
        this.database.splice(clientIndex, 1);
    }
};
exports.ClientsInMemoryRepository = ClientsInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ClientsInMemoryRepository);
//# sourceMappingURL=clients.in-memory.repository.js.map