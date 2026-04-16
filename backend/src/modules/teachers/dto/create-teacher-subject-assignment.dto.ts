import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTeacherSubjectAssignmentDto {
  @IsNotEmpty()
  @IsString()
  teacherId!: string;

  @IsNotEmpty()
  @IsString()
  subjectId!: string;

  @IsNotEmpty()
  @IsString()
  classId!: string;

  @IsOptional()
  @IsString()
  sectionId?: string;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
