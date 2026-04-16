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
exports.FeesController = void 0;
const common_1 = require("@nestjs/common");
const fees_service_1 = require("./fees.service");
const create_fee_structure_dto_1 = require("./dto/create-fee-structure.dto");
const create_fee_payment_dto_1 = require("./dto/create-fee-payment.dto");
const create_invoice_dto_1 = require("./dto/create-invoice.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let FeesController = class FeesController {
    constructor(feesService) {
        this.feesService = feesService;
    }
    findFeeStructures(req, schoolId) {
        const tenantId = schoolId || req.user.schoolId;
        return this.feesService.findFeeStructures(tenantId);
    }
    createFeeStructure(dto) {
        return this.feesService.createFeeStructure(dto);
    }
    updateFeeStructure(id, dto) {
        return this.feesService.updateFeeStructure(id, dto);
    }
    deleteFeeStructure(id) {
        return this.feesService.deleteFeeStructure(id);
    }
    findFeePayments(req, schoolId) {
        const tenantId = schoolId || req.user.schoolId;
        return this.feesService.findFeePayments(tenantId);
    }
    createFeePayment(dto) {
        return this.feesService.createFeePayment(dto);
    }
    getFeePayment(id) {
        return this.feesService.getFeePayment(id);
    }
    createInvoice(dto) {
        return this.feesService.createInvoice(dto);
    }
};
exports.FeesController = FeesController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('structure'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FeesController.prototype, "findFeeStructures", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('structure'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fee_structure_dto_1.CreateFeeStructureDto]),
    __metadata("design:returntype", void 0)
], FeesController.prototype, "createFeeStructure", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('structure/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FeesController.prototype, "updateFeeStructure", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('structure/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeesController.prototype, "deleteFeeStructure", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('payments'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], FeesController.prototype, "findFeePayments", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('payments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fee_payment_dto_1.CreateFeePaymentDto]),
    __metadata("design:returntype", void 0)
], FeesController.prototype, "createFeePayment", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('payments/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeesController.prototype, "getFeePayment", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('invoice'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invoice_dto_1.CreateInvoiceDto]),
    __metadata("design:returntype", void 0)
], FeesController.prototype, "createInvoice", null);
exports.FeesController = FeesController = __decorate([
    (0, common_1.Controller)('fees'),
    __metadata("design:paramtypes", [fees_service_1.FeesService])
], FeesController);
//# sourceMappingURL=fees.controller.js.map