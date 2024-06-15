import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { StateRevisorController } from './controllers/state-revisor/state-revisor.controller';
import { ExplorerService } from './services/explorer/explorer.service';
import { RevisorService } from './services/revisor/revisor.service';
import { postProviders } from './providers/post.providers';
import { stateRevisorProviders } from './providers/stateRevisor.providers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],

  controllers: [ StateRevisorController,],
  providers: [AppService, ExplorerService, RevisorService,  ...postProviders,  ...stateRevisorProviders, ],

})
export class AppModule { }
