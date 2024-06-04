import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('stories')
export class StoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'image', comment: 'Foto de la historia' })
  image: string;

  @Column({ type: 'varchar', name: 'name', comment: 'Nombre de Usuario' })
  user: string;
}