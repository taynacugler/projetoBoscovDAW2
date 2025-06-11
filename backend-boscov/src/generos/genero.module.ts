import { Module } from '@nestjs/common';
import { GeneroController } from './generos.controller';
import { GeneroService } from './generos.service';


@Module({
  controllers: [GeneroController],
  providers: [GeneroService],
})
export class GeneroModule {}
