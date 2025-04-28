import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { PrismaModule } from '../prisma/prisma.module'; // importa o PrismaModule
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  imports: [PrismaModule], // adiciona aqui
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}

