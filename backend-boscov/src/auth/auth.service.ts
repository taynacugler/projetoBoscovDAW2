// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CreateUsuarioDto } from 'src/usuario/dto/usuario.dto/usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async register(data: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(data.senha, 10);

    return this.usuarioService.create({
      ...data,
      senha: hashedPassword,
    });
  }

  async login(data: { email: string; senha: string }) {
    const usuario = await this.usuarioService.findByEmail(data.email);

    if (!usuario) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(data.senha, usuario.senha);

    if (!senhaValida) {
      throw new UnauthorizedException('Senha inválida');
    }

    const payload = { sub: usuario.id, email: usuario.email, tipo: usuario.tipoUsuario };

    const token = this.jwtService.sign(payload);

    return {
      token,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
        tipoUsuario: usuario.tipoUsuario,
      },
    };
  }
}
