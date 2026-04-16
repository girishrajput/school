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
exports.TeachersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TeachersService = class TeachersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findTeachers(schoolId) {
        return this.prisma.teacher.findMany({ where: { schoolId }, include: { user: true, school: true } });
    }
    findTeacher(id) {
        return this.prisma.teacher.findUnique({ where: { id }, include: { user: true, school: true } });
    }
    assignSubject(dto) {
        return this.prisma.teacherSubjectAssignment.create({ data: dto });
    }
    findAssignments(schoolId) {
        return this.prisma.teacherSubjectAssignment.findMany({
            where: { schoolId },
            include: { teacher: { include: { user: true } }, subject: true, class: true, section: true },
        });
    }
    requestLeave(dto) {
        return this.prisma.teacherLeave.create({ data: dto });
    }
    findLeaves(schoolId) {
        return this.prisma.teacherLeave.findMany({ where: { schoolId }, include: { teacher: { include: { user: true } } } });
    }
    async updateLeaveStatus(id, status) {
        const leave = await this.prisma.teacherLeave.findUnique({ where: { id } });
        if (!leave)
            throw new common_1.NotFoundException('Leave request not found');
        return this.prisma.teacherLeave.update({ where: { id }, data: { status } });
    }
};
exports.TeachersService = TeachersService;
exports.TeachersService = TeachersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TeachersService);
//# sourceMappingURL=teachers.service.js.map