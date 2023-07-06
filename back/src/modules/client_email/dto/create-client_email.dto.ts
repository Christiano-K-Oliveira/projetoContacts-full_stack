import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateClientEmailDto {
  @ApiProperty({
    description: 'Email do cliente',
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(12)
  email: string;
}
