import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('avaliacoes')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateAvaliacaoDto) {
    const idUsuario = req.user.id;
    return this.avaliacaoService.create(idUsuario, dto);
  }

  @Get()
  findAll() {
    return this.avaliacaoService.findAll();
  }

  @Get(':idFilme')
  findOne(@Req() req, @Param('idFilme') idFilme: string) {
    const idUsuario = req.user.id;
    return this.avaliacaoService.findOne(idUsuario, Number(idFilme));
  }


  @Put(':idFilme')
  update(
    @Req() req,
    @Param('idFilme') idFilme: string,
    @Body() dto: CreateAvaliacaoDto,
  ) {
    const idUsuario = req.user.id;
    return this.avaliacaoService.update(idUsuario, Number(idFilme), dto);
  }

  @Delete(':idFilme')
  remove(@Req() req, @Param('idFilme') idFilme: string) {
    const idUsuario = req.user.id;
    return this.avaliacaoService.remove(idUsuario, Number(idFilme));
  }
}
