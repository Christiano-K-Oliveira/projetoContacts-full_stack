import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'Testaing',
    // required: false,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(12)
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Cannot be empty' })
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  telephone: string;
}
