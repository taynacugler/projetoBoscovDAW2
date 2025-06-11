import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // ajusta o caminho conforme seu projeto

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.genero.findMany({
      orderBy: { descricao: 'asc' },
    });
  }

  async findOne(id: number) {
    const genero = await this.prisma.genero.findUnique({
      where: { id },
    });

    if (!genero) {
      throw new NotFoundException(`Gênero com id ${id} não encontrado`);
    }

    return genero;
  }

 
}
