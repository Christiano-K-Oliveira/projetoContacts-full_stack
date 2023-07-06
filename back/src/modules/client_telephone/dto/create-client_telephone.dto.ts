import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateClientTelephoneDto {
  @ApiProperty({
    description: 'Número do cliente',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  number: string;
}
