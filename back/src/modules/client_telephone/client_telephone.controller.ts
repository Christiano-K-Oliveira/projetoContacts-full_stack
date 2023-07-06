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
import { ClientTelephoneService } from './client_telephone.service';
import { CreateClientTelephoneDto } from './dto/create-client_telephone.dto';
import { UpdateClientTelephoneDto } from './dto/update-client_telephone.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('client-telephone')
@Controller('client-telephone')
export class ClientTelephoneController {
  constructor(
    private readonly clientTelephoneService: ClientTelephoneService,
  ) {}

  @Post('')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(
    @Body() createClientTelephoneDto: CreateClientTelephoneDto,
    @Request() req,
  ) {
    return this.clientTelephoneService.create(
      createClientTelephoneDto,
      req.user.id,
    );
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string, @Request() req) {
    return this.clientTelephoneService.findOne(id, req.user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateClientTelephoneDto: UpdateClientTelephoneDto,
    @Request() req,
  ) {
    return this.clientTelephoneService.update(
      id,
      updateClientTelephoneDto,
      req.user.id,
    );
  }

  @HttpCode(204)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Request() req) {
    return this.clientTelephoneService.remove(id, req.user.id);
  }
}
