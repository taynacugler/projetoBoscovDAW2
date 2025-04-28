// usuario.service.ts

import { Injectable } from '@nestjs/common';

import { CreateUsuarioDto, UpdateUsuarioDto } from './dto/usuario.dto/usuario.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data: createUsuarioDto,
    });
  }

  async findAll() {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: string) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  async remove(id: string) {
    return this.prisma.usuario.update({
      where: { id },
      data: { deletedAt: new Date() }, // Soft delete
    });
  }
}
