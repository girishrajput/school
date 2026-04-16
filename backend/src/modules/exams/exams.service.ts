import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { CreateMarkDto } from './dto/create-mark.dto';
import { CreateResultDto } from './dto/create-result.dto';

@Injectable()
export class ExamsService {
  constructor(private readonly prisma: PrismaService) {}

  findExams(schoolId: string) {
    return this.prisma.exam.findMany({ where: { schoolId }, include: { class: true, section: true, subject: true } });
  }

  getExam(id: string) {
    return this.prisma.exam.findUnique({ where: { id }, include: { class: true, section: true, subject: true, marks: true, results: true } });
  }

  createExam(dto: CreateExamDto) {
    return this.prisma.exam.create({ data: dto });
  }

  createMark(dto: CreateMarkDto) {
    return this.prisma.mark.create({ data: dto });
  }

  findMarks(schoolId: string, examId?: string) {
    const where = { schoolId } as any;
    if (examId) where.examId = examId;
    return this.prisma.mark.findMany({ where, include: { exam: true, student: { include: { user: true } } } });
  }

  createResult(dto: CreateResultDto) {
    return this.prisma.result.create({ data: dto });
  }

  findResults(schoolId: string, examId?: string) {
    const where = { schoolId } as any;
    if (examId) where.examId = examId;
    return this.prisma.result.findMany({ where, include: { exam: true, student: { include: { user: true } } } });
  }

  async updateResult(id: string, dto: Partial<CreateResultDto>) {
    const result = await this.prisma.result.findUnique({ where: { id } });
    if (!result) throw new NotFoundException('Result not found');
    return this.prisma.result.update({ where: { id }, data: dto });
  }
}
