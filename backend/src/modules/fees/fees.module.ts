import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FeesService } from './fees.service';
import { FeesController } from './fees.controller';
import { SchoolsModule } from '../schools/schools.module';

@Module({
  imports: [SchoolsModule],
  providers: [FeesService, PrismaService],
  controllers: [FeesController],
  exports: [FeesService],
})
export class FeesModule {}
