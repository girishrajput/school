import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTeacherSubjectAssignmentDto } from './dto/create-teacher-subject-assignment.dto';
import { CreateTeacherLeaveDto } from './dto/create-teacher-leave.dto';

@Injectable()
export class TeachersService {
  constructor(private readonly prisma: PrismaService) {}

  findTeachers(schoolId: string) {
    return this.prisma.teacher.findMany({ where: { schoolId }, include: { user: true, school: true } });
  }

  findTeacher(id: string) {
    return this.prisma.teacher.findUnique({ where: { id }, include: { user: true, school: true } });
  }

  assignSubject(dto: CreateTeacherSubjectAssignmentDto) {
    return this.prisma.teacherSubjectAssignment.create({ data: dto });
  }

  findAssignments(schoolId: string) {
    return this.prisma.teacherSubjectAssignment.findMany({
      where: { schoolId },
      include: { teacher: { include: { user: true } }, subject: true, class: true, section: true },
    });
  }

  requestLeave(dto: CreateTeacherLeaveDto) {
    return this.prisma.teacherLeave.create({ data: dto });
  }

  findLeaves(schoolId: string) {
    return this.prisma.teacherLeave.findMany({ where: { schoolId }, include: { teacher: { include: { user: true } } } });
  }

  async updateLeaveStatus(id: string, status: string) {
    const leave = await this.prisma.teacherLeave.findUnique({ where: { id } });
    if (!leave) throw new NotFoundException('Leave request not found');
    return this.prisma.teacherLeave.update({ where: { id }, data: { status } });
  }
}
