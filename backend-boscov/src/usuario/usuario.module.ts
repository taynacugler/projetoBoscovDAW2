import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { PrismaModule } from '../prisma/prisma.module'; 
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  imports: [PrismaModule], 
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}

