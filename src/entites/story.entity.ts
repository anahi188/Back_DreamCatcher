import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from './user.entity';
import { LikeEntity } from './like.entity';

@Entity('stories')
export class StoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'photo', comment: 'Foto de la historia' })
  photo: string;

  @ManyToOne(() => UserEntity, user => user.stories)
  user: UserEntity;

  @OneToMany(() => LikeEntity, like => like.story)
  likes: LikeEntity[];
}
