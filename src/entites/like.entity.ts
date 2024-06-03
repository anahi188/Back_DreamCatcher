import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserEntity } from './user.entity';
import { StoryEntity } from './story.entity';

@Entity('likes')
export class LikeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, user => user.likes)
  user: UserEntity;

  @ManyToOne(() => StoryEntity, story => story.likes)
  story: StoryEntity;
}
