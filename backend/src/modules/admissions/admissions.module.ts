import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AdmissionsController } from './admissions.controller';
import { AdmissionsService } from './admissions.service';
import { SchoolsModule } from '../schools/schools.module';

@Module({
  imports: [SchoolsModule],
  controllers: [AdmissionsController],
  providers: [AdmissionsService, PrismaService],
  exports: [AdmissionsService],
})
export class AdmissionsModule {}
