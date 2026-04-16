import { Body, Controller, Get, Post, Query, UseGuards, Request } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('attendance')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  mark(@Body() dto: CreateAttendanceDto) {
    return this.attendanceService.markAttendance(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('bulk')
  bulk(@Body() dtos: CreateAttendanceDto[]) {
    return this.attendanceService.bulkMark(dtos);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  list(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenant = schoolId || req.user.schoolId;
    return this.attendanceService.findBySchool(tenant);
  }

  @UseGuards(JwtAuthGuard)
  @Get('monthly')
  report(
    @Request() req: { user: { schoolId: string } },
    @Query('month') month: string,
    @Query('year') year: string,
    @Query('schoolId') schoolId?: string,
  ) {
    const tenant = schoolId || req.user.schoolId;
    return this.attendanceService.getMonthlyReport(tenant, Number(month), Number(year));
  }
}
