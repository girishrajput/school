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
exports.TeachersController = void 0;
const common_1 = require("@nestjs/common");
const teachers_service_1 = require("./teachers.service");
const create_teacher_subject_assignment_dto_1 = require("./dto/create-teacher-subject-assignment.dto");
const create_teacher_leave_dto_1 = require("./dto/create-teacher-leave.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let TeachersController = class TeachersController {
    constructor(teachersService) {
        this.teachersService = teachersService;
    }
    findAll(req, schoolId) {
        const tenantId = schoolId || req.user.schoolId;
        return this.teachersService.findTeachers(tenantId);
    }
    findById(id) {
        return this.teachersService.findTeacher(id);
    }
    assignSubject(dto) {
        return this.teachersService.assignSubject(dto);
    }
    getAssignments(req, schoolId) {
        const tenantId = schoolId || req.user.schoolId;
        return this.teachersService.findAssignments(tenantId);
    }
    requestLeave(dto) {
        return this.teachersService.requestLeave(dto);
    }
    getLeaves(req, schoolId) {
        const tenantId = schoolId || req.user.schoolId;
        return this.teachersService.findLeaves(tenantId);
    }
    updateLeaveStatus(id, data) {
        return this.teachersService.updateLeaveStatus(id, data.status);
    }
};
exports.TeachersController = TeachersController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('assignments'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_subject_assignment_dto_1.CreateTeacherSubjectAssignmentDto]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "assignSubject", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('assignments'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "getAssignments", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('leaves'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teacher_leave_dto_1.CreateTeacherLeaveDto]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "requestLeave", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('leaves'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "getLeaves", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('leaves/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TeachersController.prototype, "updateLeaveStatus", null);
exports.TeachersController = TeachersController = __decorate([
    (0, common_1.Controller)('teachers'),
    __metadata("design:paramtypes", [teachers_service_1.TeachersService])
], TeachersController);
//# sourceMappingURL=teachers.controller.js.map