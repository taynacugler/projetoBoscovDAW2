import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Configura a porta, ou usa a padrão 3000
  const port = process.env.PORT || 3000;

  // Inicia o servidor na porta configurada
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
