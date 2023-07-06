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
exports.ClientEmailController = void 0;
const common_1 = require("@nestjs/common");
const client_email_service_1 = require("./client_email.service");
const create_client_email_dto_1 = require("./dto/create-client_email.dto");
const update_client_email_dto_1 = require("./dto/update-client_email.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ClientEmailController = exports.ClientEmailController = class ClientEmailController {
    constructor(clientEmailService) {
        this.clientEmailService = clientEmailService;
    }
    create(createClientEmailDto, req) {
        return this.clientEmailService.create(createClientEmailDto, req.user.id);
    }
    findOne(id, req) {
        return this.clientEmailService.findOne(id, req.user.id);
    }
    update(id, updateClientEmailDto, req) {
        return this.clientEmailService.update(id, updateClientEmailDto, req.user.id);
    }
    remove(id, req) {
        return this.clientEmailService.remove(id, req.user.id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_email_dto_1.CreateClientEmailDto, Object]),
    __metadata("design:returntype", void 0)
], ClientEmailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClientEmailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_client_email_dto_1.UpdateClientEmailDto, Object]),
    __metadata("design:returntype", void 0)
], ClientEmailController.prototype, "update", null);
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
], ClientEmailController.prototype, "remove", null);
exports.ClientEmailController = ClientEmailController = __decorate([
    (0, swagger_1.ApiTags)('client-email'),
    (0, common_1.Controller)('client-email'),
    __metadata("design:paramtypes", [client_email_service_1.ClientEmailService])
], ClientEmailController);
//# sourceMappingURL=client_email.controller.js.map