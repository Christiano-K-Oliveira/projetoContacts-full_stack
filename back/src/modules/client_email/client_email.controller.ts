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
import { ClientEmailService } from './client_email.service';
import { CreateClientEmailDto } from './dto/create-client_email.dto';
import { UpdateClientEmailDto } from './dto/update-client_email.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('client-email')
@Controller('client-email')
export class ClientEmailController {
  constructor(private readonly clientEmailService: ClientEmailService) {}

  @Post('')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createClientEmailDto: CreateClientEmailDto, @Request() req) {
    return this.clientEmailService.create(createClientEmailDto, req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string, @Request() req) {
    return this.clientEmailService.findOne(id, req.user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateClientEmailDto: UpdateClientEmailDto,
    @Request() req,
  ) {
    return this.clientEmailService.update(
      id,
      updateClientEmailDto,
      req.user.id,
    );
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Request() req) {
    return this.clientEmailService.remove(id, req.user.id);
  }
}
