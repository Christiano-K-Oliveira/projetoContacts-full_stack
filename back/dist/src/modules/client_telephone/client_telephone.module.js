"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientTelephoneModule = void 0;
const common_1 = require("@nestjs/common");
const client_telephone_service_1 = require("./client_telephone.service");
const client_telephone_controller_1 = require("./client_telephone.controller");
const clientTelephone_repository_1 = require("./repositories/clientTelephone.repository");
const prisma_service_1 = require("../../../database/prisma.service");
const clientTelephone_prisma_repository_1 = require("./repositories/prisma/clientTelephone-prisma.repository");
let ClientTelephoneModule = exports.ClientTelephoneModule = class ClientTelephoneModule {
};
exports.ClientTelephoneModule = ClientTelephoneModule = __decorate([
    (0, common_1.Module)({
        controllers: [client_telephone_controller_1.ClientTelephoneController],
        providers: [
            client_telephone_service_1.ClientTelephoneService,
            prisma_service_1.PrismaService,
            {
                provide: clientTelephone_repository_1.ClientTelephoneRepository,
                useClass: clientTelephone_prisma_repository_1.ClientTelephonePrismaRepository,
            },
        ],
    })
], ClientTelephoneModule);
//# sourceMappingURL=client_telephone.module.js.map