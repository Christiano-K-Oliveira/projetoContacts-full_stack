import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateContactEmailDto {
  @ApiProperty({
    description: 'Email do contato',
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(12)
  email: string;

  @ApiProperty({
    description: 'Id do contato',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  contact_id: string;
}
