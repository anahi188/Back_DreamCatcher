import { Module } from '@nestjs/common';
import { ResolverService } from 'src/services/resolver.service';
import { resolverProviders } from './providers/resolver.providers';
import { databaseProviders } from './database/database.providers';
import { ResolverController } from './controllers/resolver.controller';


@Module({
  imports: [],
  controllers: [ResolverController],
  providers: [ResolverService, ...resolverProviders, ...databaseProviders],
})
export class AppModule {}
