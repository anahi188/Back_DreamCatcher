import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { StateRevisorController } from './controllers/state-revisor/state-revisor.controller';
import { ExplorerService } from './services/explorer/explorer.service';
import { RevisorService } from './services/revisor/revisor.service';
import { postProviders } from './providers/post.providers';
import { stateRevisorProviders } from './providers/stateRevisor.providers';



@Module({
  imports: [DatabaseModule],
  controllers: [AppController, StateRevisorController,],
  providers: [AppService, ExplorerService, RevisorService,  ...postProviders,  ...stateRevisorProviders, ],
})
export class AppModule {}
