// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module'; 
import { PrismaService } from './prisma/prisma.service'; 

@Module({
  imports: [UsuarioModule],
  controllers: [AppController],
  providers: [AppService, PrismaService], 
})
export class AppModule {}
