import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';

@Injectable()
export class SchoolsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateSchoolDto) {
    return this.prisma.school.create({ data });
  }

  findAll() {
    return this.prisma.school.findMany();
  }

  findById(schoolId: string) {
    return this.prisma.school.findUnique({ where: { id: schoolId } });
  }
}
