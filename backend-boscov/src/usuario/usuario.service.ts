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
        tipoUsuario: createUsuarioDto.tipoUsuario.toUpperCase() as TipoUsuario,
      },
    });
  }

  async findAll() {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: string) {
    return this.prisma.usuario.findUnique({
      where: { id: Number(id) },
    });
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        ...updateUsuarioDto,
        tipoUsuario: updateUsuarioDto.tipoUsuario?.toUpperCase() as TipoUsuario,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.usuario.update({
      where: { id: Number(id) },
      data: { deletedAt: new Date() }, // Soft delete
    });
  }
}
