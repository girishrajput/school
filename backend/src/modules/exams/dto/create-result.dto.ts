import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateResultDto {
  @IsNotEmpty()
  @IsString()
  examId!: string;

  @IsNotEmpty()
  @IsString()
  studentId!: string;

  @IsNotEmpty()
  @IsNumber()
  totalObtained!: number;

  @IsNotEmpty()
  @IsNumber()
  percentage!: number;

  @IsNotEmpty()
  @IsString()
  grade!: string;

  @IsNotEmpty()
  @IsString()
  status!: string;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
