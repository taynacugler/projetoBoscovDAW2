// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module'; // Importe o seu módulo de usuário
import { PrismaService } from './prisma/prisma.service'; // Importe o PrismaService

@Module({
  imports: [UsuarioModule], // Você já tem outros módulos aqui
  controllers: [AppController],
  providers: [AppService, PrismaService], // Aqui você adiciona o PrismaService aos providers
})
export class AppModule {}
