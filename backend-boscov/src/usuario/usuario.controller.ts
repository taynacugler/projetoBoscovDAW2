import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto/usuario.dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@ApiTags('Usuários')
@ApiBearerAuth()
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Criar usuário' })
  @ApiBody({ type: CreateUsuarioDto })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Get(':id/avaliacoes')
  @ApiOperation({ summary: 'Listar todas as avaliações de um usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: Number })
  getAvaliacoesDoUsuario(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findAvaliacoesByUsuario(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  @ApiBody({ type: UpdateUsuarioDto })
  update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: String })
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}
