import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { SchoolsModule } from './modules/schools/schools.module';
import { StudentsModule } from './modules/students/students.module';
import { AdmissionsModule } from './modules/admissions/admissions.module';
import { FeesModule } from './modules/fees/fees.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { ExamsModule } from './modules/exams/exams.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { TenantMiddleware } from './common/interceptors/tenant.middleware';
import { AwsS3Service } from './common/aws/aws-s3.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    SchoolsModule,
    StudentsModule,
    AdmissionsModule,
    FeesModule,
    AttendanceModule,
    ExamsModule,
    TeachersModule,
  ],
  providers: [PrismaService, AwsS3Service],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantMiddleware).forRoutes('*');
  }
}
