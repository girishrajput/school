import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateTeacherLeaveDto {
  @IsNotEmpty()
  @IsString()
  teacherId!: string;

  @IsNotEmpty()
  @IsDateString()
  fromDate!: string;

  @IsNotEmpty()
  @IsDateString()
  toDate!: string;

  @IsNotEmpty()
  @IsString()
  reason!: string;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
