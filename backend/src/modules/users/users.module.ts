import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SchoolsModule } from '../schools/schools.module';

@Module({
  imports: [SchoolsModule],
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
