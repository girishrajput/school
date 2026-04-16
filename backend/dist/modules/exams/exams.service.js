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
exports.ExamsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ExamsService = class ExamsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findExams(schoolId) {
        return this.prisma.exam.findMany({ where: { schoolId }, include: { class: true, section: true, subject: true } });
    }
    getExam(id) {
        return this.prisma.exam.findUnique({ where: { id }, include: { class: true, section: true, subject: true, marks: true, results: true } });
    }
    createExam(dto) {
        return this.prisma.exam.create({ data: dto });
    }
    createMark(dto) {
        return this.prisma.mark.create({ data: dto });
    }
    findMarks(schoolId, examId) {
        const where = { schoolId };
        if (examId)
            where.examId = examId;
        return this.prisma.mark.findMany({ where, include: { exam: true, student: { include: { user: true } } } });
    }
    createResult(dto) {
        return this.prisma.result.create({ data: dto });
    }
    findResults(schoolId, examId) {
        const where = { schoolId };
        if (examId)
            where.examId = examId;
        return this.prisma.result.findMany({ where, include: { exam: true, student: { include: { user: true } } } });
    }
    async updateResult(id, dto) {
        const result = await this.prisma.result.findUnique({ where: { id } });
        if (!result)
            throw new common_1.NotFoundException('Result not found');
        return this.prisma.result.update({ where: { id }, data: dto });
    }
};
exports.ExamsService = ExamsService;
exports.ExamsService = ExamsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExamsService);
//# sourceMappingURL=exams.service.js.map