import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSchoolDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  domain!: string;
}
