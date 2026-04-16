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
exports.ExamsController = void 0;
const common_1 = require("@nestjs/common");
const exams_service_1 = require("./exams.service");
const create_exam_dto_1 = require("./dto/create-exam.dto");
const create_mark_dto_1 = require("./dto/create-mark.dto");
const create_result_dto_1 = require("./dto/create-result.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let ExamsController = class ExamsController {
    constructor(examsService) {
        this.examsService = examsService;
    }
    findAll(req, schoolId) {
        const tenantId = schoolId || req.user.schoolId;
        return this.examsService.findExams(tenantId);
    }
    createExam(dto) {
        return this.examsService.createExam(dto);
    }
    findById(id) {
        return this.examsService.getExam(id);
    }
    createMark(dto) {
        return this.examsService.createMark(dto);
    }
    getMarks(req, examId, schoolId) {
        const tenantId = schoolId || req.user.schoolId;
        return this.examsService.findMarks(tenantId, examId);
    }
    createResult(dto) {
        return this.examsService.createResult(dto);
    }
    getResults(req, examId, schoolId) {
        const tenantId = schoolId || req.user.schoolId;
        return this.examsService.findResults(tenantId, examId);
    }
    updateResult(id, dto) {
        return this.examsService.updateResult(id, dto);
    }
};
exports.ExamsController = ExamsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exam_dto_1.CreateExamDto]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "createExam", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "findById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('marks'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mark_dto_1.CreateMarkDto]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "createMark", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('marks'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('examId')),
    __param(2, (0, common_1.Query)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "getMarks", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('results'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_result_dto_1.CreateResultDto]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "createResult", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('results'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('examId')),
    __param(2, (0, common_1.Query)('schoolId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "getResults", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('results/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ExamsController.prototype, "updateResult", null);
exports.ExamsController = ExamsController = __decorate([
    (0, common_1.Controller)('exams'),
    __metadata("design:paramtypes", [exams_service_1.ExamsService])
], ExamsController);
//# sourceMappingURL=exams.controller.js.map