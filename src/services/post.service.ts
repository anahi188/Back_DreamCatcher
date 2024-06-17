import { Inject, Injectable } from "@nestjs/common";
import { CommentEntity } from "src/entites/comment.entity";
import { PostEntity } from "src/entites/post.entity";
import { UserEntity } from "src/entites/user.entity";
import { In, Repository } from "typeorm";

@Injectable()
export class PostService{
    constructor(
        @Inject('POST_REPOSITORY') private readonly postRepository: Repository<PostEntity>,
        @Inject('POST_REPOSITORY') private readonly userRepository: Repository<UserEntity>,
        @Inject('USER_REPOSITORY') private readonlycomentRepository: Repository<CommentEntity>
    ){

    }

    async findAll() {
        return await this.postRepository.find({ relations: ['user'] });
      }
    
      async findOne(id: string) {
        return await this.postRepository.findOne({ where: { id }, relations: ['user'] });
      }
    
      async findPostsForUserAndFriends(userId: string) {
        const user = await this.userRepository.findOne({
          where: { id: userId },
          relations: ['friends'],
        });
      
        if (!user || !user.friends) {
          return []; // Si el usuario no existe o no tiene amigos, retornar un array vacío
        }
      
        const friendIds = user.friends.map(friend => friend.id);
        return this.postRepository.find({
          where: {
            user: {
              id: In(friendIds),
            },
          },
          relations: ['user'],
          order: {
            created_at: 'DESC', // Ordenar por fecha de creación descendente
          },
        });
      }
    
      async createPost(imageFilename: string, userId: string, commentId: string) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        const post = this.postRepository.create({ image: imageFilename});
        const newPost = await this.postRepository.save(post);
    
        const posts = await this.findPostsForUserAndFriends(userId);
        return [newPost, ...posts];
      }
    
      async updatePost(id: string, imageFilename: string, commentId: string) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (post) {
          post.image = imageFilename;
        //   post.commentId = commentId; // Actualizar el ID del comentario asociado
          return await this.postRepository.save(post);
        }
        return null;
      }
    }

