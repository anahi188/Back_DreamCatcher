import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

async function bootstrap() {
  // Cast a NestExpressApplication
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const uploadsPath = join(__dirname, '..', 'uploads');

  // Sirve archivos estáticos desde la carpeta uploads/posts
  app.useStaticAssets(join(__dirname, '..', 'uploads', 'posts'), {
    prefix: '/uploads/posts/', // La URL será http://localhost:3009/uploads/posts/
  });

  // Verificar y crear las carpetas si no existen
  if (!existsSync(uploadsPath)) {
    mkdirSync(uploadsPath, { recursive: true });
  }

  // Configuración de CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Permite solo este origen
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    credentials: true, // Si manejas cookies o autenticación
  });

  // Escuchar en el puerto 3009
  await app.listen(3009);
}

bootstrap();
