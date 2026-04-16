import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';

@Module({
  providers: [SchoolsService, PrismaService],
  controllers: [SchoolsController],
  exports: [SchoolsService],
})
export class SchoolsModule {}
