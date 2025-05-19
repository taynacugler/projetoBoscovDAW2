import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) {}

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

  findAll() {
    return this.prisma.avaliacao.findMany({ where: { deletedAt: null } });
  }

  findOne(idUsuario: number, idFilme: number) {
    return this.prisma.avaliacao.findUnique({
      where: {
        idUsuario_idFilme: {
          idUsuario,
          idFilme,
        },
      },
    });
  }

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
