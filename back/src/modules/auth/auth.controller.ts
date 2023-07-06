import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { loginDto } from './dto/login.dto';

// interface iClientLogin {
//   email: string;
//   password: string;
// }

@ApiTags('login')
@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() client: loginDto) {
    return this.authService.login(client.email);
  }

  // @Post('valid-contact')
  // @UseGuards(LocalAuthGuard)
  // async validateContact(@Body() contact: string) {
  //   return this.validateContact(contact);
  // }

  // @Post('valid-client')
  // @UseGuards(LocalAuthGuard)
  // async validateClient(@Body() email: string, password: string) {
  //   return this.validateClient(email, password);
  // }
}
