import { IsNotEmpty, IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateExamDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  classId!: string;

  @IsOptional()
  @IsString()
  sectionId?: string;

  @IsNotEmpty()
  @IsString()
  subjectId!: string;

  @IsNotEmpty()
  @IsDateString()
  examDate!: string;

  @IsNotEmpty()
  @IsNumber()
  totalMarks!: number;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
