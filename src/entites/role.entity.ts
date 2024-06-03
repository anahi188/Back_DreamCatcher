import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, length: 50, comment: 'Nombre del rol' })
  name: string;

  @ManyToMany(() => UserEntity, user => user.roles)
  users: UserEntity[];
}
