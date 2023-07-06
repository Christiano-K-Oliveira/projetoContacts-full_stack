"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEmailController = void 0;
const common_1 = require("@nestjs/common");
const contact_email_service_1 = require("./contact_email.service");
const create_contact_email_dto_1 = require("./dto/create-contact_email.dto");
const update_contact_email_dto_1 = require("./dto/update-contact_email.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ContactEmailController = exports.ContactEmailController = class ContactEmailController {
    constructor(contactEmailService) {
        this.contactEmailService = contactEmailService;
    }
    create(createContactEmailDto, req) {
        return this.contactEmailService.create(createContactEmailDto, req.user.id);
    }
    findOne(id, req) {
        return this.contactEmailService.findOne(id, req.user.id);
    }
    update(id, updateContactEmailDto, req) {
        return this.contactEmailService.update(id, updateContactEmailDto, req.user.id);
    }
    remove(id, req) {
        return this.contactEmailService.remove(id, req.user.id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_email_dto_1.CreateContactEmailDto, Object]),
    __metadata("design:returntype", void 0)
], ContactEmailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContactEmailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contact_email_dto_1.UpdateContactEmailDto, Object]),
    __metadata("design:returntype", void 0)
], ContactEmailController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContactEmailController.prototype, "remove", null);
exports.ContactEmailController = ContactEmailController = __decorate([
    (0, swagger_1.ApiTags)('contact-email'),
    (0, common_1.Controller)('contact-email'),
    __metadata("design:paramtypes", [contact_email_service_1.ContactEmailService])
], ContactEmailController);
//# sourceMappingURL=contact_email.controller.js.map