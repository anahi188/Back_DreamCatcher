import { DataSource } from 'typeorm';
import { UserEntity } from '../entites/user.entity';

export const userProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];