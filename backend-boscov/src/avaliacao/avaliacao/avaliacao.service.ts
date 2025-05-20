import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) {}

  // Cria uma nova avaliação para o usuário logado
  create(idUsuario: number, dto: CreateAvaliacaoDto) {
    return this.prisma.avaliacao.create({
      data: {
        idUsuario,
        idFilme: dto.idFilme,
        nota: dto.nota,
        comentario: dto.comentario,
      },
    });
  }

  // Retorna todas as avaliações do usuário logado

  // Retorna todas as avaliações (de todos os usuários)
  findAll() {
    return this.prisma.avaliacao.findMany({
      where: {
        deletedAt: null,
      },
    });
  }

  // Retorna uma avaliação específica do usuário para um filme
 findOne(idUsuario: number, idFilme: number) {
  return this.prisma.avaliacao.findUnique({
    where: {
      idUsuario_idFilme: {
        idUsuario: Number(idUsuario),
        idFilme: Number(idFilme),
      },
    },
  });
}

  // Atualiza a nota/comentário de uma avaliação existente
  update(idUsuario: number, idFilme: number, dto: CreateAvaliacaoDto) {
    return this.prisma.avaliacao.update({
      where: {
        idUsuario_idFilme: {
          idUsuario,
          idFilme,
        },
      },
      data: {
        nota: dto.nota,
        comentario: dto.comentario,
      },
    });
  }

  // Remove (soft delete) uma avaliação
  remove(idUsuario: number, idFilme: number) {
    return this.prisma.avaliacao.update({
      where: {
        idUsuario_idFilme: {
          idUsuario,
          idFilme,
        },
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
