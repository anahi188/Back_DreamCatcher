import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { userProviders } from './providers/user.providers';
import { storyProviders } from './providers/story.providers';
import { likeProviders } from './providers/like.providers';
import { roleProviders } from './providers/role.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    ...userProviders,
    ...storyProviders,
    ...likeProviders,
    ...roleProviders,
  ],
})
export class AppModule {}
