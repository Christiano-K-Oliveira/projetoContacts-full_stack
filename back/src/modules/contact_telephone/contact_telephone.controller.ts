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
import { ContactTelephoneService } from './contact_telephone.service';
import { CreateContactTelephoneDto } from './dto/create-contact_telephone.dto';
import { UpdateContactTelephoneDto } from './dto/update-contact_telephone.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('contact-telephone')
@Controller('contact-telephone')
export class ContactTelephoneController {
  constructor(
    private readonly contactTelephoneService: ContactTelephoneService,
  ) {}

  @Post('')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createContactTelephoneDto: CreateContactTelephoneDto) {
    return this.contactTelephoneService.create(createContactTelephoneDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string, @Request() req) {
    return this.contactTelephoneService.findOne(id, req.user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateContactTelephoneDto: UpdateContactTelephoneDto,
    @Request() req,
  ) {
    return this.contactTelephoneService.update(
      id,
      updateContactTelephoneDto,
      req.user.id,
    );
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Request() req) {
    return this.contactTelephoneService.remove(id, req.user.id);
  }
}
