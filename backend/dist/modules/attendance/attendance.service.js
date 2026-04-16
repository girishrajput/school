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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AttendanceService = class AttendanceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    markAttendance(dto) {
        return this.prisma.attendance.create({ data: dto });
    }
    findBySchool(schoolId) {
        return this.prisma.attendance.findMany({ where: { schoolId }, include: { student: true } });
    }
    async bulkMark(dtos) {
        const records = await this.prisma.attendance.createMany({ data: dtos });
        return records;
    }
    async getMonthlyReport(schoolId, month, year) {
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 1);
        return this.prisma.attendance.groupBy({
            by: ['studentId', 'status'],
            where: { schoolId, date: { gte: start, lt: end } },
            _count: { status: true },
        });
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map