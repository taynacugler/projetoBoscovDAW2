import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFilmeDto) {
    const {
      nome,
      diretor,
      anoLancamento,
      duracao,
      produtora,
      classificacao,
      poster,
      generosIds,
    } = data;

    const novoFilme = await this.prisma.filme.create({
      data: {
        nome,
        diretor,
        anoLancamento,
        duracao,
        produtora,
        classificacao,
        poster,
      },
    });

    
    if (generosIds && generosIds.length > 0) {
      await this.prisma.generoFilme.createMany({
        data: generosIds.map((idGenero) => ({
          idFilme: novoFilme.id,
          idGenero,
        })),
        skipDuplicates: true, 
      });
    }

  
    return this.prisma.filme.findUnique({
      where: { id: novoFilme.id },
      include: {
        generos: {
          include: {
            genero: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.filme.findMany({
      where: { deletedAt: null },
      include: {
        generos: {
          include: {
            genero: true,
          },
        },
        avaliacoes: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({
      where: { id },
      include: { generos: { include: { genero: true } }, avaliacoes: true },
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
