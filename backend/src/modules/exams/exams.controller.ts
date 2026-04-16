import { Body, Controller, Get, Param, Post, Put, Query, UseGuards, Request } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { CreateMarkDto } from './dto/create-mark.dto';
import { CreateResultDto } from './dto/create-result.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenantId = schoolId || req.user.schoolId;
    return this.examsService.findExams(tenantId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createExam(@Body() dto: CreateExamDto) {
    return this.examsService.createExam(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.examsService.getExam(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('marks')
  createMark(@Body() dto: CreateMarkDto) {
    return this.examsService.createMark(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('marks')
  getMarks(@Request() req: { user: { schoolId: string } }, @Query('examId') examId?: string, @Query('schoolId') schoolId?: string) {
    const tenantId = schoolId || req.user.schoolId;
    return this.examsService.findMarks(tenantId, examId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('results')
  createResult(@Body() dto: CreateResultDto) {
    return this.examsService.createResult(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('results')
  getResults(@Request() req: { user: { schoolId: string } }, @Query('examId') examId?: string, @Query('schoolId') schoolId?: string) {
    const tenantId = schoolId || req.user.schoolId;
    return this.examsService.findResults(tenantId, examId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('results/:id')
  updateResult(@Param('id') id: string, @Body() dto: Partial<CreateResultDto>) {
    return this.examsService.updateResult(id, dto);
  }
}
