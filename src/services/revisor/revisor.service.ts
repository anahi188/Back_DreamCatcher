import { Inject, Injectable } from '@nestjs/common';
import { StateRevisorEntity } from 'src/entites/stateRevisor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RevisorService {
    constructor(
        @Inject('STATEREVISOR_REPOSITORY')
        private readonly revisorRepository: Repository<StateRevisorEntity>
        ){}
      
        async getAll() {
          const complaint = await this.revisorRepository.find();
          return complaint;
        }
        async createForm(payload: any) {
          const newStateRevisor =this.revisorRepository.create();
         newStateRevisor.name_offender = payload.infractor;
          newStateRevisor.problem = payload.problem;
          newStateRevisor.problem_date = payload.complaint_date;
          newStateRevisor.problem_hour = payload.time;
          newStateRevisor.severity= payload.severity;
          
      
           await  this.revisorRepository.save(newStateRevisor);  
      }
}
