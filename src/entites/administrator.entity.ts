import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('administrators')
export class AdministratorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'image', comment: 'Nombre del Infractor' })
  name_offender: string;

  @Column({ type: 'varchar', name: 'name', comment: 'Problema Usuario' })
  problem: string;

  @Column({ type: 'varchar', name: 'name', comment: 'Fecha del Problema' })
  problem_date: Date;

  @Column({ type: 'varchar', name: 'name', comment: 'Hora del Problema' })
  problem_hour: number;

  @Column({ type: 'varchar', name: 'name', comment: 'Nombre de Usuario' })
  severity: boolean;
}