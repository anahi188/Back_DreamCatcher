import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const uploadsPath = join(__dirname, '..', 'uploads');

  
  // Verificar y crear las carpetas si no existen
  if (!existsSync(uploadsPath)) {
    mkdirSync(uploadsPath, { recursive: true });
  }

  app.enableCors({
    origin: 'http://localhost:4200', // Permite solo este origen
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    credentials: true, // Si manejas cookies o autenticación
  });

  await app.listen(3009);
}
bootstrap();
