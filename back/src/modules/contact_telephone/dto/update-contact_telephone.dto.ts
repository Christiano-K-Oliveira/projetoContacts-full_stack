import { PartialType } from '@nestjs/swagger';
import { CreateContactTelephoneDto } from './create-contact_telephone.dto';

export class UpdateContactTelephoneDto extends PartialType(
  CreateContactTelephoneDto,
) {}
