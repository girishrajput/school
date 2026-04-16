import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { SchoolsModule } from '../schools/schools.module';

@Module({
  imports: [SchoolsModule],
  providers: [AttendanceService, PrismaService],
  controllers: [AttendanceController],
  exports: [AttendanceService],
})
export class AttendanceModule {}
