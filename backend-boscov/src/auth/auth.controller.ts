// auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from 'src/usuario/dto/usuario.dto/usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.authService.register(createUsuarioDto);
  }

  @Post('login')
  async login(@Body() credentials: { email: string; senha: string }) {
    return this.authService.login(credentials);
  }
}
