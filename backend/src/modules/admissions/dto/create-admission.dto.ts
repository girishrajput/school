import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAdmissionDto {
  @IsNotEmpty()
  @IsString()
  studentName!: string;

  @IsNotEmpty()
  @IsString()
  parentName!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsOptional()
  @IsString()
  classId?: string;

  @IsOptional()
  @IsString()
  sectionId?: string;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
