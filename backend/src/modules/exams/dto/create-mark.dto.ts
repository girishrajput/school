import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMarkDto {
  @IsNotEmpty()
  @IsString()
  examId!: string;

  @IsNotEmpty()
  @IsString()
  studentId!: string;

  @IsNotEmpty()
  @IsNumber()
  marksObtained!: number;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
