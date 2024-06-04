import { AdministratorEntity } from 'src/entites/administrator.entity';
import { DataSource } from 'typeorm';

export const administratorProviders = [
  {
    provide: 'STORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AdministratorEntity),
    inject: ['DATA_SOURCE'],
  },
];