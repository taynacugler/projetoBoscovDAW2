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
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // importe seu JwtAuthGuard
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateFilmeDto } from './dto/create-filme.dto';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADM')
create(@Body() data: CreateFilmeDto) {
  return this.filmesService.create(data);
}
  @Get()
  findAll() {
    return this.filmesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADM')
  update(@Param('id') id: string, @Body() data: any) {
    return this.filmesService.update(+id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADM')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
