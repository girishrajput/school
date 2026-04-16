import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  userId!: string;

  @IsOptional()
  @IsString()
  parentId?: string;

  @IsOptional()
  @IsString()
  classId?: string;

  @IsOptional()
  @IsString()
  sectionId?: string;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;

  @IsOptional()
  @IsString()
  admissionId?: string;
}
