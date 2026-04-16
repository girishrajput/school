import { Body, Controller, Get, Param, Post, Put, Delete, Query, UseGuards, Request } from '@nestjs/common';
import { FeesService } from './fees.service';
import { CreateFeeStructureDto } from './dto/create-fee-structure.dto';
import { CreateFeePaymentDto } from './dto/create-fee-payment.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('fees')
export class FeesController {
  constructor(private feesService: FeesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('structure')
  findFeeStructures(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenantId = schoolId || req.user.schoolId;
    return this.feesService.findFeeStructures(tenantId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('structure')
  createFeeStructure(@Body() dto: CreateFeeStructureDto) {
    return this.feesService.createFeeStructure(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('structure/:id')
  updateFeeStructure(@Param('id') id: string, @Body() dto: Partial<CreateFeeStructureDto>) {
    return this.feesService.updateFeeStructure(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('structure/:id')
  deleteFeeStructure(@Param('id') id: string) {
    return this.feesService.deleteFeeStructure(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('payments')
  findFeePayments(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenantId = schoolId || req.user.schoolId;
    return this.feesService.findFeePayments(tenantId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('payments')
  createFeePayment(@Body() dto: CreateFeePaymentDto) {
    return this.feesService.createFeePayment(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('payments/:id')
  getFeePayment(@Param('id') id: string) {
    return this.feesService.getFeePayment(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('invoice')
  createInvoice(@Body() dto: CreateInvoiceDto) {
    return this.feesService.createInvoice(dto);
  }
}
