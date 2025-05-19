import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.FilmeCreateInput) {
    return this.prisma.filme.create({ data });
  }

  findAll() {
    return this.prisma.filme.findMany({
      include: { generos: true, avaliacoes: true },
    });
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({
      where: { id },
      include: { generos: true, avaliacoes: true },
    });
  }

  update(id: number, data: Prisma.FilmeUpdateInput) {
    return this.prisma.filme.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.filme.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
