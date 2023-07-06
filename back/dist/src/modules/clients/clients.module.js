"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsModule = void 0;
const common_1 = require("@nestjs/common");
const clients_service_1 = require("./clients.service");
const clients_controller_1 = require("./clients.controller");
const clients_repository_1 = require("./repositories/clients.repository");
const prisma_service_1 = require("../../../database/prisma.service");
const client_prisma_repository_1 = require("./repositories/prisma/client-prisma.repository");
let ClientsModule = exports.ClientsModule = class ClientsModule {
};
exports.ClientsModule = ClientsModule = __decorate([
    (0, common_1.Module)({
        controllers: [clients_controller_1.ClientsController],
        providers: [
            clients_service_1.ClientsService,
            prisma_service_1.PrismaService,
            {
                provide: clients_repository_1.ClientsRepository,
                useClass: client_prisma_repository_1.ClientsPrismaRepository,
            },
        ],
        exports: [clients_service_1.ClientsService],
    })
], ClientsModule);
//# sourceMappingURL=clients.module.js.map