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
exports.AdmissionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AdmissionsService = class AdmissionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(schoolId) {
        return this.prisma.admission.findMany({
            where: { schoolId },
            include: { school: true, class: true, section: true },
        });
    }
    findById(id) {
        return this.prisma.admission.findUnique({
            where: { id },
            include: { school: true, class: true, section: true },
        });
    }
    create(dto) {
        return this.prisma.admission.create({ data: dto });
    }
    async updateStatus(id, dto) {
        const existing = await this.findById(id);
        if (!existing)
            throw new common_1.NotFoundException('Admission not found');
        return this.prisma.admission.update({ where: { id }, data: dto });
    }
    async delete(id) {
        const existing = await this.findById(id);
        if (!existing)
            throw new common_1.NotFoundException('Admission not found');
        return this.prisma.admission.delete({ where: { id } });
    }
};
exports.AdmissionsService = AdmissionsService;
exports.AdmissionsService = AdmissionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdmissionsService);
//# sourceMappingURL=admissions.service.js.map