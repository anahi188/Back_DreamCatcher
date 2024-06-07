import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { storyProviders } from './providers/story.providers';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';



@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,
    ...storyProviders,
  ],
})
export class AppModule {}
