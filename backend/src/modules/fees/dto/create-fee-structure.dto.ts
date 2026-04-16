import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFeeStructureDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  classId!: string;

  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
