import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS — ajuste o origin conforme o domínio do seu frontend
  app.enableCors({
    origin: 'http://localhost:4200', // URL do seu frontend Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // caso use cookies/autenticação via cookies
  });

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Example') // Título da API
    .setDescription('The API description') // Descrição da API
    .setVersion('1.0') // Versão da API
    .addTag('users') // Adiciona uma tag para categorizar as rotas
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  
   app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));


  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
