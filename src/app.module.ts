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

import { resolverProviders } from './providers/resolver.providers';
import { ResolverController } from './controllers/resolver.controller';
import { ResolverService } from './services/resolver.service';

import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants/jwt.constant';

import { countryProviders } from './providers/country.providers';
import { CountryController } from './controllers/country.controller';
import { CountryService } from './services/country/country.service';
import { RolService } from './services/rol/rol.service';
import { RolController } from './controllers/rol.controller';
import { roleProviders } from './providers/role.providers';
import { storyProviders } from './providers/story.providers';
import { StoryService } from './services/story.service';
import { StoryController } from './controllers/story.controller';



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
    ResolverController,
    AuthController,
    CountryController,
    RolController,
    StoryController

  ],
  providers: [
    AppService,
    UserService,
    PostService,
    AuthService,
    CountryService,
    CommentService,
    ResolverService,
    ...userProviders,
    ...postProviders,
    ...commentProviders,
    ...countryProviders,
    ...roleProviders,
    ...resolverProviders,
    ...storyProviders,
    RolService,
    StoryService
  ]

    
})
export class AppModule {}
