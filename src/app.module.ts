import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { PostController } from './controllers/post.controller';
import { CommentController } from './controllers/comment.controller';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { userProviders } from './providers/user.providers';
import { postProviders } from './providers/post.providers';
import { commentProviders } from './providers/comment.providers';
import { DatabaseModule } from './database/database.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants/jwt.constant';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [
    UserController,
    PostController,
    CommentController,
    AuthController,
  ],
  providers: [
    AppService,
    UserService,
    PostService,
    AuthService,
    CommentService,
    ...userProviders,
    ...postProviders,
    ...commentProviders,
  ]
})
export class AppModule {}
