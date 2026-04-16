import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { SchoolsModule } from '../schools/schools.module';
import { AwsS3Service } from '../../common/aws/aws-s3.service';

@Module({
  imports: [SchoolsModule],
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService, AwsS3Service],
  exports: [StudentsService],
})
export class StudentsModule {}
