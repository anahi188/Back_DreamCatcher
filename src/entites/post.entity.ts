import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';


@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn('uuid', { comment: 'Identificador único de la publicación' })
    id: string;

    @Column({ type: 'text', comment: 'Texto de la publicación' })
    text: string;

    @Column({ type: 'varchar', nullable: true, comment: 'Imagen opcional de la publicación' })
    media: string;

    @Column({ type: 'varchar', comment: 'Etiqueta de la publicación' })
    tag: string;

    @Column({ type: 'varchar', comment: 'Etiqueta de la publicación' })
    userId: string;
}
