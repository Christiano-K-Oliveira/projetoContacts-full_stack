import { PartialType } from '@nestjs/swagger';
import { CreateClientTelephoneDto } from './create-client_telephone.dto';

export class UpdateClientTelephoneDto extends PartialType(
  CreateClientTelephoneDto,
) {}
