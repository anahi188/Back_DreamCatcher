import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { PostEntity } from 'src/entites/post.entity';
import { UserEntity } from 'src/entites/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
    @Inject('POST_REPOSITORY')
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async finAll() {
    const posts = await this.postRepository.find(); 
    return posts;
  }

  async create(createPostDto: CreatePostDto, media: string): Promise<PostEntity> {
    const { text, tag, userId } = createPostDto;


    const newPost = new PostEntity();
    newPost.text = text;
    newPost.tag = tag;
    newPost.media = media;
    newPost.userId = userId;

    const savedPost = await this.postRepository.save(newPost);

    return savedPost;
  }
}
