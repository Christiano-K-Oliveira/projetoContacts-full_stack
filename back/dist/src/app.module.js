"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const contacts_module_1 = require("./modules/contacts/contacts.module");
const contact_email_module_1 = require("./modules/contact_email/contact_email.module");
const contact_telephone_module_1 = require("./modules/contact_telephone/contact_telephone.module");
const client_email_module_1 = require("./modules/client_email/client_email.module");
const client_telephone_module_1 = require("./modules/client_telephone/client_telephone.module");
const auth_module_1 = require("./modules/auth/auth.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            contacts_module_1.ContactsModule,
            contact_email_module_1.ContactEmailModule,
            contact_telephone_module_1.ContactTelephoneModule,
            client_email_module_1.ClientEmailModule,
            client_telephone_module_1.ClientTelephoneModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map