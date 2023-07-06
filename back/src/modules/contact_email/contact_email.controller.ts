import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ContactEmailService } from './contact_email.service';
import { CreateContactEmailDto } from './dto/create-contact_email.dto';
import { UpdateContactEmailDto } from './dto/update-contact_email.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('contact-email')
@Controller('contact-email')
export class ContactEmailController {
  constructor(private readonly contactEmailService: ContactEmailService) {}

  @Post('')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createContactEmailDto: CreateContactEmailDto, @Request() req) {
    return this.contactEmailService.create(createContactEmailDto, req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string, @Request() req) {
    return this.contactEmailService.findOne(id, req.user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateContactEmailDto: UpdateContactEmailDto,
    @Request() req,
  ) {
    return this.contactEmailService.update(
      id,
      updateContactEmailDto,
      req.user.id,
    );
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Request() req) {
    return this.contactEmailService.remove(id, req.user.id);
  }
}
