import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFeePaymentDto {
  @IsNotEmpty()
  @IsString()
  studentId!: string;

  @IsNotEmpty()
  @IsString()
  feeStructureId!: string;

  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsString()
  transactionId!: string;

  @IsNotEmpty()
  @IsString()
  schoolId!: string;
}
