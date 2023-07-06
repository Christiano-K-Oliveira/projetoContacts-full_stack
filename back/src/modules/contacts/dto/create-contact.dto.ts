import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateContactDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  @MinLength(12)
  email: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  telephone: string;
}
