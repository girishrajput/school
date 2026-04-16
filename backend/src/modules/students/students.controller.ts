import { Body, Controller, Get, Param, Post, Put, Delete, Query, UploadedFile, UseInterceptors, Request, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { AwsS3Service } from '../../common/aws/aws-s3.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService, private s3Service: AwsS3Service) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req: { user: { schoolId: string } }, @Query('schoolId') schoolId?: string) {
    const tenant = schoolId || req.user?.schoolId;
    return this.studentsService.findAll(tenant);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studentsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    return this.studentsService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.studentsService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/documents')
  @UseInterceptors(FileInterceptor('file'))
  async uploadDocument(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    const upload = await this.s3Service.uploadFile(file, `students/${id}`);
    return this.studentsService.addDocument(id, {
      url: upload.Location,
      name: file.originalname,
      type: file.mimetype,
    });
  }
}
