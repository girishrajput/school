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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let FeesService = class FeesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findFeeStructures(schoolId) {
        return this.prisma.feeStructure.findMany({
            where: { schoolId },
            include: { class: true, school: true },
        });
    }
    createFeeStructure(dto) {
        return this.prisma.feeStructure.create({ data: dto });
    }
    async updateFeeStructure(id, dto) {
        const existing = await this.prisma.feeStructure.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Fee structure not found');
        return this.prisma.feeStructure.update({ where: { id }, data: dto });
    }
    async deleteFeeStructure(id) {
        const existing = await this.prisma.feeStructure.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Fee structure not found');
        return this.prisma.feeStructure.delete({ where: { id } });
    }
    createFeePayment(dto) {
        return this.prisma.feePayment.create({
            data: {
                ...dto,
                status: 'PAID',
                paidAt: new Date(),
            },
            include: { student: true, feeStructure: true, school: true },
        });
    }
    findFeePayments(schoolId) {
        return this.prisma.feePayment.findMany({
            where: { schoolId },
            include: { student: true, feeStructure: true, invoice: true },
        });
    }
    async getFeePayment(id) {
        const payment = await this.prisma.feePayment.findUnique({ where: { id }, include: { invoice: true } });
        if (!payment)
            throw new common_1.NotFoundException('Fee payment not found');
        return payment;
    }
    createInvoice(dto) {
        return this.prisma.invoice.create({ data: dto });
    }
};
exports.FeesService = FeesService;
exports.FeesService = FeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FeesService);
//# sourceMappingURL=fees.service.js.map