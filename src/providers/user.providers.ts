import { UserEntity } from 'src/entites/user.entity';
import { DataSource } from 'typeorm';



export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
