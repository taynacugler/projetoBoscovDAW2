// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module'; 
import { PrismaService } from './prisma/prisma.service'; 
import { AuthModule } from './auth/auth.module';
import { AvaliacaoModule } from './avaliacao/avaliacao/avaliacao.module';
import { FilmesModule } from './filmes/filmes.module';

@Module({
  imports: [UsuarioModule, AuthModule, AvaliacaoModule, FilmesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService], 
})
export class AppModule {}
