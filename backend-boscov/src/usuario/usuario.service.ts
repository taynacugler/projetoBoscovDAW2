// usuario.service.ts

import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto/usuario.dto/usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TipoUsuario } from 'generated/prisma';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data: {
        ...createUsuarioDto,
        dataNascimento: new Date(createUsuarioDto.dataNascimento), 
        tipoUsuario: TipoUsuario.COMUM, // fixo como COMUM
      },
    });
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      where: { deletedAt: null }, // ignora usuários "deletados"
    });
  }

  async findOne(id: string) {
    return this.prisma.usuario.findUnique({
      where: { id: Number(id) },
    });
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    // Atualiza o usuário sem alterar tipoUsuario
    return this.prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        ...updateUsuarioDto,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async remove(id: string) {
    return this.prisma.usuario.update({
      where: { id: Number(id) },
      data: { deletedAt: new Date() },
    });
  }
}
