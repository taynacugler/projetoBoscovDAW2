
import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { ApiTags} from'@nestjs/swagger';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto/usuario.dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
     console.log('ID recebido no controller:', id);
    return this.usuarioService.findOne(id);
  }

  // GET /usuario/:id/avaliacoes
@Get(':id/avaliacoes')
getAvaliacoesDoUsuario(@Param('id', ParseIntPipe) id: number) {
  return this.usuarioService.findAvaliacoesByUsuario(id);
}

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}
