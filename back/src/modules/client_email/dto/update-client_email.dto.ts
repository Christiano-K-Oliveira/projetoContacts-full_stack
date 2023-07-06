import { PartialType } from '@nestjs/swagger';
import { CreateClientEmailDto } from './create-client_email.dto';

export class UpdateClientEmailDto extends PartialType(CreateClientEmailDto) {}
