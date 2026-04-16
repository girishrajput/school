"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./prisma/prisma.service");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const schools_module_1 = require("./modules/schools/schools.module");
const students_module_1 = require("./modules/students/students.module");
const admissions_module_1 = require("./modules/admissions/admissions.module");
const fees_module_1 = require("./modules/fees/fees.module");
const attendance_module_1 = require("./modules/attendance/attendance.module");
const exams_module_1 = require("./modules/exams/exams.module");
const teachers_module_1 = require("./modules/teachers/teachers.module");
const tenant_middleware_1 = require("./common/interceptors/tenant.middleware");
const aws_s3_service_1 = require("./common/aws/aws-s3.service");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(tenant_middleware_1.TenantMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            schools_module_1.SchoolsModule,
            students_module_1.StudentsModule,
            admissions_module_1.AdmissionsModule,
            fees_module_1.FeesModule,
            attendance_module_1.AttendanceModule,
            exams_module_1.ExamsModule,
            teachers_module_1.TeachersModule,
        ],
        providers: [prisma_service_1.PrismaService, aws_s3_service_1.AwsS3Service],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map