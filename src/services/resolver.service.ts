    import { Inject, Injectable } from '@nestjs/common';
    import { ResolverEntity } from 'src/entites/resolver.entity';
    import { Repository } from 'typeorm';

    @Injectable()
    export class ResolverService {
        
        constructor(
            @Inject('RESOLVER_REPOSITORY') private readonly resolverRepository: Repository<ResolverEntity>) {
        }

        async find(id: string) {
            const resolver = await this.resolverRepository.findOne({
                where: { id: id },
            });
            return resolver;
        }

        async create(payload: any) {
            const newResolver: ResolverEntity = this.resolverRepository.create();
            newResolver.name = payload.name;
            newResolver.last_name = payload.last_name;
            newResolver.email = payload.email;
            newResolver.solution = payload.solution;
            newResolver.date = payload.date;
            newResolver.complaint_number = payload.complaint_number;
            newResolver.suspended_account = payload.suspended_account;
            newResolver.user = payload.user; //Relacion

            return this.resolverRepository.save(newResolver);
        }

    }
