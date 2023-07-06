"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEmailModule = void 0;
const common_1 = require("@nestjs/common");
const client_email_service_1 = require("./client_email.service");
const client_email_controller_1 = require("./client_email.controller");
const clientEmail_repository_1 = require("./repositories/clientEmail.repository");
const prisma_service_1 = require("../../../database/prisma.service");
const clientEmail_prisma_repository_1 = require("./repositories/prisma/clientEmail-prisma.repository");
let ClientEmailModule = exports.ClientEmailModule = class ClientEmailModule {
};
exports.ClientEmailModule = ClientEmailModule = __decorate([
    (0, common_1.Module)({
        controllers: [client_email_controller_1.ClientEmailController],
        providers: [
            client_email_service_1.ClientEmailService,
            prisma_service_1.PrismaService,
            {
                provide: clientEmail_repository_1.ClientEmailRepository,
                useClass: clientEmail_prisma_repository_1.ClientEmailPrismaRepository,
            },
        ],
    })
], ClientEmailModule);
//# sourceMappingURL=client_email.module.js.map