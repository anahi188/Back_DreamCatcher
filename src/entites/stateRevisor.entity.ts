import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('state_revisors')
export class StateRevisorEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único del estado de revisor' })
    id: string;

    @Column({ type: 'varchar', comment: 'Problema encontrado' })
    problem: string;

    @Column({ type: 'date', comment: 'Fecha del problema' })
    problem_date: Date;

    @Column({ type: 'time', comment: 'Hora del problema' })
    problem_hour: string;

    @Column({ type: 'varchar', length: 20, comment: 'Severidad del problema' })
    severity: string;

    @Column({ type: 'varchar', comment: 'Nombre del infractor' })
    name_offender: string;

    @ManyToOne(() => UserEntity, user => user.stateRevisors)
    user: UserEntity;
}
