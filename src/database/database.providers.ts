import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres', 
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',

        database: 'dreamCatcher',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],

        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
