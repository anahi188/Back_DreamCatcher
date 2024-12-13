import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { userProviders } from './providers/user.providers';
import { DatabaseModule } from './database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { postProviders } from './providers/post.providers';

@Module({
  imports: [
    // Módulo para manejar la conexión a la base de datos
    DatabaseModule,

    // Configuración de JWT para autenticación (opcional, si lo necesitas)
    JwtModule.register({
      secret: 'mi-secreto',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [
    // Controladores para manejar rutas y lógica del backend
    UserController,
    PostController
  ],
  providers: [
    // Servicios y proveedores para manejar la lógica de negocio
    AppService,
    UserService,
    PostService,
    ...userProviders,
    ...postProviders
  ],
})
export class AppModule {}
