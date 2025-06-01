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
        tipoUsuario: TipoUsuario.COMUM,
        status: 'ativo',
      },
    });
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      where: { deletedAt: null }, 
    });
  }
async findAvaliacoesByUsuario(idUsuario: number) {
  return this.prisma.avaliacao.findMany({
    where: {
      idUsuario,
      deletedAt: null,
    },
    include: {
      filme: true, 
    },
  });
}

 async findOne(id: string) {
  const numericId = Number(id);

  if (!id || isNaN(numericId)) {
    throw new Error('ID inválido');
  }

  return this.prisma.usuario.findUnique({
    where: { id: numericId },
  });
}


  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
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
