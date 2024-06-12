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
import { DatabaseModule } from './database/database.module';
import { resolverProviders } from './providers/resolver.providers';
import { ResolverController } from './controllers/resolver.controller';
import { ResolverService } from './services/resolver.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AppController,
    UserController,
    PostController,
    CommentController,
    ResolverController
  ],
  providers: [
    AppService,
    UserService,
    PostService,
    CommentService,
    ResolverService,
    ...userProviders,
    ...postProviders,
    ...commentProviders,
    ...resolverProviders
  ],
})
export class AppModule { }
