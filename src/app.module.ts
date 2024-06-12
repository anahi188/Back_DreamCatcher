import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';

import { UserController } from './controllers/user.controller';
import { PostController } from './controllers/post.controller';
import { CommentController } from './controllers/comment.controller';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { userProviders } from './providers/user.providers';
import { postProviders } from './providers/post.providers';
import { commentProviders } from './providers/comment.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AppController,
    UserController,
    PostController,
    CommentController,
  ],
  providers: [
    AppService,
    UserService,
    PostService,
    CommentService,
    ...userProviders,
    ...postProviders,
    ...commentProviders,
  ],
})
export class AppModule { }
