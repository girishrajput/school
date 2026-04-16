import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAdmissionDto } from './dto/create-admission.dto';
import { UpdateAdmissionDto } from './dto/update-admission.dto';

@Injectable()
export class AdmissionsService {
  constructor(private prisma: PrismaService) {}

  findAll(schoolId: string) {
    return this.prisma.admission.findMany({
      where: { schoolId },
      include: { school: true, class: true, section: true },
    });
  }

  findById(id: string) {
    return this.prisma.admission.findUnique({
      where: { id },
      include: { school: true, class: true, section: true },
    });
  }

  create(dto: CreateAdmissionDto) {
    return this.prisma.admission.create({ data: dto });
  }

  async updateStatus(id: string, dto: UpdateAdmissionDto) {
    const existing = await this.findById(id);
    if (!existing) throw new NotFoundException('Admission not found');
    return this.prisma.admission.update({ where: { id }, data: dto });
  }

  async delete(id: string) {
    const existing = await this.findById(id);
    if (!existing) throw new NotFoundException('Admission not found');
    return this.prisma.admission.delete({ where: { id } });
  }
}
