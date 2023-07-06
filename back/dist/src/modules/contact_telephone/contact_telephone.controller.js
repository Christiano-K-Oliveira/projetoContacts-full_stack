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
exports.ContactTelephoneController = void 0;
const common_1 = require("@nestjs/common");
const contact_telephone_service_1 = require("./contact_telephone.service");
const create_contact_telephone_dto_1 = require("./dto/create-contact_telephone.dto");
const update_contact_telephone_dto_1 = require("./dto/update-contact_telephone.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ContactTelephoneController = exports.ContactTelephoneController = class ContactTelephoneController {
    constructor(contactTelephoneService) {
        this.contactTelephoneService = contactTelephoneService;
    }
    create(createContactTelephoneDto) {
        return this.contactTelephoneService.create(createContactTelephoneDto);
    }
    findOne(id, req) {
        return this.contactTelephoneService.findOne(id, req.user.id);
    }
    update(id, updateContactTelephoneDto, req) {
        return this.contactTelephoneService.update(id, updateContactTelephoneDto, req.user.id);
    }
    remove(id, req) {
        return this.contactTelephoneService.remove(id, req.user.id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_telephone_dto_1.CreateContactTelephoneDto]),
    __metadata("design:returntype", void 0)
], ContactTelephoneController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContactTelephoneController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contact_telephone_dto_1.UpdateContactTelephoneDto, Object]),
    __metadata("design:returntype", void 0)
], ContactTelephoneController.prototype, "update", null);
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
], ContactTelephoneController.prototype, "remove", null);
exports.ContactTelephoneController = ContactTelephoneController = __decorate([
    (0, swagger_1.ApiTags)('contact-telephone'),
    (0, common_1.Controller)('contact-telephone'),
    __metadata("design:paramtypes", [contact_telephone_service_1.ContactTelephoneService])
], ContactTelephoneController);
//# sourceMappingURL=contact_telephone.controller.js.map