import { Body, Controller, Get, Param, Post, Put, Query, UseGuards, Request } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherSubjectAssignmentDto } from './dto/create-teacher-subject-assignment.dto';
import { CreateTeacherLeaveDto } from './dto/create-teacher-leave.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenantId = schoolId || req.user.schoolId;
    return this.teachersService.findTeachers(tenantId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.teachersService.findTeacher(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('assignments')
  assignSubject(@Body() dto: CreateTeacherSubjectAssignmentDto) {
    return this.teachersService.assignSubject(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('assignments')
  getAssignments(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenantId = schoolId || req.user.schoolId;
    return this.teachersService.findAssignments(tenantId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('leaves')
  requestLeave(@Body() dto: CreateTeacherLeaveDto) {
    return this.teachersService.requestLeave(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('leaves')
  getLeaves(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenantId = schoolId || req.user.schoolId;
    return this.teachersService.findLeaves(tenantId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('leaves/:id')
  updateLeaveStatus(@Param('id') id: string, @Body() data: { status: string }) {
    return this.teachersService.updateLeaveStatus(id, data.status);
  }
}
