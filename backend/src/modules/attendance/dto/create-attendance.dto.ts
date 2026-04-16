import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateAttendanceDto {
  @IsNotEmpty()
  @IsString()
  studentId!: string;

  @IsNotEmpty()
  @IsDateString()
  date!: string;

  @IsNotEmpty()
  @IsString()
  status!: string;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
