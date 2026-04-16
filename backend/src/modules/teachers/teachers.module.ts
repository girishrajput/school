import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  imports: [],
  controllers: [TeachersController],
  providers: [TeachersService, PrismaService],
  exports: [TeachersService],
})
export class TeachersModule {}
