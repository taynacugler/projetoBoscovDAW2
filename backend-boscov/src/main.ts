import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // Configura a porta, ou usa a padrão 3000
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
