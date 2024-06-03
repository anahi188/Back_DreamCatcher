import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { StoryEntity } from './story.entity';
import { LikeEntity } from './like.entity';
import { RoleEntity } from './role.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'first_name', length: 40, comment: 'Primer nombre del usuario' })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 40, comment: 'Apellido del usuario' })
  lastName: string;

  @Column({ type: 'varchar', name: 'email', unique: true, comment: 'Correo electrónico del usuario' })
  email: string;

  @Column({ type: 'varchar', name: 'city', length: 100, comment: 'Ciudad del usuario' })
  city: string;

  @Column({ type: 'varchar', name: 'password', comment: 'Contraseña del usuario' })
  password: string;

  @Column({ type: 'varchar', name: 'avatar', nullable: true, comment: 'Avatar del usuario' })
  avatar: string;

  @Column({ type: 'text', name: 'description', nullable: true, comment: 'Descripción del usuario' })
  description: string;

  @OneToMany(() => StoryEntity, story => story.user)
  stories: StoryEntity[];

  @OneToMany(() => LikeEntity, like => like.user)
  likes: LikeEntity[];

  @ManyToMany(() => RoleEntity, role => role.users)
  @JoinTable({
    name: 'user_roles',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: RoleEntity[];
}
