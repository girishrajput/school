import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInvoiceDto {
  @IsNotEmpty()
  @IsString()
  feePaymentId!: string;

  @IsNotEmpty()
  @IsString()
  invoiceUrl!: string;
}
