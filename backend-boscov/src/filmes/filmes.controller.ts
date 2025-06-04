import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateFilmeDto } from './dto/create-filme.dto';

import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Filmes') 
@ApiBearerAuth()  
@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADM')
  @ApiOperation({ summary: 'Criar um novo filme (somente ADM)' })
  create(@Body() data: CreateFilmeDto) {
    return this.filmesService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os filmes' })
  findAll() {
    return this.filmesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um filme por ID' })
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADM')
  @ApiOperation({ summary: 'Atualizar dados de um filme (somente ADM)' })
  update(@Param('id') id: string, @Body() data: any) {
    return this.filmesService.update(+id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADM')
  @ApiOperation({ summary: 'Remover um filme (somente ADM)' })
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
