import { Body, Controller, Get, Post, Param, Put, Delete, Query, UseGuards, Request } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';
import { CreateAdmissionDto } from './dto/create-admission.dto';
import { UpdateAdmissionDto } from './dto/update-admission.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('admissions')
export class AdmissionsController {
  constructor(private admissionsService: AdmissionsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenant = schoolId || req.user?.schoolId;
    return this.admissionsService.findAll(tenant);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.admissionsService.findById(id);
  }

  @Post()
  create(@Body() dto: CreateAdmissionDto) {
    return this.admissionsService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAdmissionDto) {
    return this.admissionsService.updateStatus(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.admissionsService.delete(id);
  }
}
