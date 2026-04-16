import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  markAttendance(dto: CreateAttendanceDto) {
    return this.prisma.attendance.create({ data: dto });
  }

  findBySchool(schoolId: string) {
    return this.prisma.attendance.findMany({ where: { schoolId }, include: { student: true } });
  }

  async bulkMark(dtos: CreateAttendanceDto[]) {
    const records = await this.prisma.attendance.createMany({ data: dtos });
    return records;
  }

  async getMonthlyReport(schoolId: string, month: number, year: number) {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 1);

    return this.prisma.attendance.groupBy({
      by: ['studentId', 'status'],
      where: { schoolId, date: { gte: start, lt: end } },
      _count: { status: true },
    });
  }
}
