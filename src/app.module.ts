import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { storyProviders } from './providers/story.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService,
    ...storyProviders,
  ],
})
export class AppModule {}
