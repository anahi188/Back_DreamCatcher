import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { resolverProviders } from 'src/providers/resolver.providers';

@Module({
    providers: [...databaseProviders, ...resolverProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }

