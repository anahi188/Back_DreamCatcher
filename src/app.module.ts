import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { ResolverController } from './controllers/resolver.controller';
import { StoryController } from './controllers/story.controller';
import { StoryService } from './services/story.service';
import { ResolverService } from './services/resolver.service';
import { storyProviders } from './providers/story.providers';
import { resolverProviders } from './providers/resolver.providers';
import { DatabaseModule } from './database/database.module';



@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    AppController,
    ResolverController,
    StoryController
  ],
  providers: [
    AppService,
    ResolverService,
    StoryService,
    ...resolverProviders,
    ...storyProviders
  ],
})
export class AppModule {}
