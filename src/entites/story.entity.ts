import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { LikeEntity } from './like.entity';

@Entity('stories')
export class StoryEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único de la historia' })
    id: string;

    @Column({ type: 'varchar', nullable: true, comment: 'Foto de la historia' })
    photo: string;

    @ManyToOne(() => UserEntity, user => user.stories)
    user: UserEntity;

    @OneToMany(() => LikeEntity, like => like.story)
    likes: LikeEntity[];
}
