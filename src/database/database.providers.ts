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
        password: '12345',
        database: 'dreamCatcher',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Asegúrate de que la ruta de las entidades sea correcta
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
