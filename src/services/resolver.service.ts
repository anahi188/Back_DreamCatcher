
import { Inject, Injectable } from '@nestjs/common';
import { ResolverEntity } from 'src/entites/resolver.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResolverService {
  constructor(@Inject('RESOLVER_REPOSITORY') private readonly resolverRepository: Repository<ResolverEntity>
  ) {}

  async finAll() {
    const resolver = await this.resolverRepository.find();
    //PARA EL PAGINACION
    //take: 2, paginacion numero
    //skip: 1,  - devuleve el regitro que continua y no el 1 si no el 2 - paginado de dos registros
    return resolver;
  }

  

  async find(id: string) {
    const resolver = await this.resolverRepository.findOne({ where: { id } });
    return resolver;
  }

  create(payload: any) {
    console.log("Trae", payload)
    const resolver = this.resolverRepository.create();
    resolver.name = payload.name;
    resolver.last_name = payload.lastname;
    resolver.email = payload.email;
    resolver.solution = payload.solution;
    resolver.date = payload.date;
    resolver.complaint_number = payload.complaint_number;
    resolver.suspended_account = payload.suspended_account;

    return this.resolverRepository.save(resolver);
  }

  async update(id: string, payload: any) {
    const resolver = await this.resolverRepository.findOne({ where: { id } });
    resolver.name = payload.name;
    resolver.last_name = payload.last_name;
    resolver.email = payload.email;
    resolver.solution = payload.solution;
    resolver.date = payload.date;
    resolver.complaint_number = payload.complaint_number;
    resolver.suspended_account = payload.suspended_account;

    return this.resolverRepository.save(resolver);
  }
}
