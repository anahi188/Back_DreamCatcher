import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', comment: 'Primer nombre del usuario' })
  firstname: string;

  @Column({ type: 'varchar', comment: 'Apellido del usuario' })
  lastname: string;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Descripción breve sobre el usuario',
  })
  livingIn: string;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Descripción breve sobre el usuario',
  })
  maritalStatus: string;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Descripción breve sobre el usuario',
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Descripción breve sobre el usuario',
  })
  workingAt: string;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Imagen opcional de la publicación',
  })
  avatar: string;

  @Column({
    type: 'varchar',
    nullable: true,
    comment: 'Imagen opcional de la publicación',
  })
  backgroundImage: string;

  // Nueva columna para user_id
  @Column({
    type: 'uuid',
    nullable: true,
    comment: 'Identificador del usuario asociado',
  })
  userId: string;
}
