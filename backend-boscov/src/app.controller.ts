import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app') // Adiciona uma tag para o controller (pode ser usada para agrupar as rotas)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Retorna uma saudação de boas-vindas.',
    type: String, // Tipo de resposta esperada (nesse caso uma string)
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
