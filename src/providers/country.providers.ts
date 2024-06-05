import { CountryEntity } from 'src/entites/country.entity';
import { DataSource } from 'typeorm';

export const roleProviders = [
  {
    provide: 'COUNTRY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CountryEntity),
    inject: ['DATA_SOURCE'],
  },
];
