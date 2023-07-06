import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateContactTelephoneDto {
  @ApiProperty({
    description: 'Número do contato',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  number: string;

  @ApiProperty({
    description: 'Id do contato',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  contact_id: string;
}
