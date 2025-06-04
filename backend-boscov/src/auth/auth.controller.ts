import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from 'src/usuario/dto/usuario.dto/usuario.dto';

import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('Autenticação') 
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar novo usuário' })
  @ApiBody({ type: CreateUsuarioDto })
  async register(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.authService.register(createUsuarioDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login do usuário' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'usuario@email.com' },
        senha: { type: 'string', example: 'senha123' },
      },
    },
  })
  async login(@Body() credentials: { email: string; senha: string }) {
    return this.authService.login(credentials);
  }
}
