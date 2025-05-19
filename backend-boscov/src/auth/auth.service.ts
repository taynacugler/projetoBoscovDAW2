// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CreateUsuarioDto } from 'src/usuario/dto/usuario.dto/usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(data.senha, 10);

    return this.usuarioService.create({
      ...data,
      senha: hashedPassword,
    });
  }

   async validateUser(email: string, senha: string) {
    const user = await this.usuarioService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      throw new UnauthorizedException('Senha inválida');
    }

    return user;
  }

  async login(credentials: { email: string; senha: string }) {
    const user = await this.validateUser(credentials.email, credentials.senha);

    const payload = { sub: user.id, email: user.email };

    const token = this.jwtService.sign(payload);

    return {
      message: 'Login realizado com sucesso!',
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        username: user.username,
        tipoUsuario: user.tipoUsuario,
        status: user.status,
      },
    };
  }
}