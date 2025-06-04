import {Controller, Post, Body, Get, Param, Put, Delete, Req, UseGuards} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Avaliações')        
@ApiBearerAuth()            
@UseGuards(JwtAuthGuard)     
@Controller('avaliacoes')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar avaliação do usuário autenticado para um filme' })
  create(@Req() req, @Body() dto: CreateAvaliacaoDto) {
    const idUsuario = req.user.id;
    return this.avaliacaoService.create(idUsuario, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as avaliações (de todos os usuários)' })
  findAll() {
    return this.avaliacaoService.findAll();
  }

  @Get(':idFilme')
  @ApiOperation({ summary: 'Buscar avaliação do usuário.' })
  findOne(@Req() req, @Param('idFilme') idFilme: string) {
    const idUsuario = req.user.id;
    return this.avaliacaoService.findOne(idUsuario, Number(idFilme));
  }

  @Put(':idFilme')
  @ApiOperation({ summary: 'Atualizar avaliação do usuário.' })
  update(
    @Req() req,
    @Param('idFilme') idFilme: string,
    @Body() dto: CreateAvaliacaoDto,
  ) {
    const idUsuario = req.user.id;
    return this.avaliacaoService.update(idUsuario, Number(idFilme), dto);
  }

  @Delete(':idFilme')
  @ApiOperation({ summary: 'Remover avaliação do usuário' })
  remove(@Req() req, @Param('idFilme') idFilme: string) {
    const idUsuario = req.user.id;
    return this.avaliacaoService.remove(idUsuario, Number(idFilme));
  }
}
