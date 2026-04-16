import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  findAll(schoolId: string) {
    return this.prisma.student.findMany({
      where: { schoolId },
      include: { user: true, parent: true, class: true, section: true, documents: true, admission: true },
    });
  }

  findById(id: string) {
    return this.prisma.student.findUnique({
      where: { id },
      include: { user: true, parent: true, class: true, section: true, documents: true, admission: true },
    });
  }

  async create(dto: CreateStudentDto) {
    return this.prisma.student.create({ data: dto });
  }

  async update(id: string, dto: UpdateStudentDto) {
    const found = await this.findById(id);
    if (!found) throw new NotFoundException('Student not found');
    return this.prisma.student.update({ where: { id }, data: dto });
  }

  async delete(id: string) {
    const found = await this.findById(id);
    if (!found) throw new NotFoundException('Student not found');
    return this.prisma.student.delete({ where: { id } });
  }

  async addDocument(studentId: string, data: { url: string; name: string; type: string }) {
    const student = await this.findById(studentId);
    if (!student) throw new NotFoundException('Student not found');
    return this.prisma.document.create({
      data: { studentId, ...data },
    });
  }
}
