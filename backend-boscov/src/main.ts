import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Example') // Título da API
    .setDescription('The API description') // Descrição da API
    .setVersion('1.0') // Versão da API
    .addTag('users') // Adiciona uma tag para categorizar as rotas
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  // Configura o Swagger UI para ser acessado na URL '/api'
  SwaggerModule.setup('api', app, document);

  // Configura a porta, ou usa a padrão 3000
  const port = process.env.PORT || 3000;

  // Inicia o servidor na porta configurada
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
