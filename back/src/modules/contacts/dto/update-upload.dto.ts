import { PartialType } from '@nestjs/swagger';
import { CreateContactDto } from './create-contact.dto';

export class UpdateUploadDto extends PartialType(CreateContactDto) {}
