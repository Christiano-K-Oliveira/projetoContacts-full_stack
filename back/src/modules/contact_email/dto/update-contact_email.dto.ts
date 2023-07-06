import { PartialType } from '@nestjs/swagger';
import { CreateContactEmailDto } from './create-contact_email.dto';

export class UpdateContactEmailDto extends PartialType(CreateContactEmailDto) {}
