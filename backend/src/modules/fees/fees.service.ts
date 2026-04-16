import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFeeStructureDto } from './dto/create-fee-structure.dto';
import { CreateFeePaymentDto } from './dto/create-fee-payment.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class FeesService {
  constructor(private prisma: PrismaService) {}

  // Fee structure CRUD
  findFeeStructures(schoolId: string) {
    return this.prisma.feeStructure.findMany({
      where: { schoolId },
      include: { class: true, school: true },
    });
  }

  createFeeStructure(dto: CreateFeeStructureDto) {
    return this.prisma.feeStructure.create({ data: dto });
  }

  async updateFeeStructure(id: string, dto: Partial<CreateFeeStructureDto>) {
    const existing = await this.prisma.feeStructure.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Fee structure not found');
    return this.prisma.feeStructure.update({ where: { id }, data: dto });
  }

  async deleteFeeStructure(id: string) {
    const existing = await this.prisma.feeStructure.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Fee structure not found');
    return this.prisma.feeStructure.delete({ where: { id } });
  }

  // Fee payment workflow
  createFeePayment(dto: CreateFeePaymentDto) {
    return this.prisma.feePayment.create({
      data: {
        ...dto,
        status: 'PAID',
        paidAt: new Date(),
      },
      include: { student: true, feeStructure: true, school: true },
    });
  }

  findFeePayments(schoolId: string) {
    return this.prisma.feePayment.findMany({
      where: { schoolId },
      include: { student: true, feeStructure: true, invoice: true },
    });
  }

  async getFeePayment(id: string) {
    const payment = await this.prisma.feePayment.findUnique({ where: { id }, include: { invoice: true } });
    if (!payment) throw new NotFoundException('Fee payment not found');
    return payment;
  }

  // Invoice
  createInvoice(dto: CreateInvoiceDto) {
    return this.prisma.invoice.create({ data: dto });
  }
}
