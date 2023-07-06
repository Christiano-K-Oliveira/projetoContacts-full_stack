"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsModule = void 0;
const common_1 = require("@nestjs/common");
const contacts_service_1 = require("./contacts.service");
const contacts_controller_1 = require("./contacts.controller");
const contacts_repository_1 = require("./repositories/contacts.repository");
const prisma_service_1 = require("../../../database/prisma.service");
const contact_prisma_repository_1 = require("./repositories/prisma/contact-prisma.repository");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ContactsModule = exports.ContactsModule = class ContactsModule {
};
exports.ContactsModule = ContactsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: './tmp',
                    filename: (_, file, cb) => {
                        cb(null, file.originalname);
                    },
                }),
                fileFilter: (_, file, cb) => {
                    if (file.mimetype === 'image/jpeg' || file.mimetype === 'audio/mpeg') {
                        cb(null, true);
                    }
                    else {
                        cb(new common_1.BadRequestException('Only jpeg format allowed'), false);
                    }
                },
            }),
        ],
        controllers: [contacts_controller_1.ContactsController],
        providers: [
            contacts_service_1.ContactsService,
            prisma_service_1.PrismaService,
            {
                provide: contacts_repository_1.ContactsRepository,
                useClass: contact_prisma_repository_1.ContactsPrismaRepository,
            },
        ],
        exports: [contacts_repository_1.ContactsRepository, contacts_service_1.ContactsService],
    })
], ContactsModule);
//# sourceMappingURL=contacts.module.js.map