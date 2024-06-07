import { Inject, Injectable } from '@nestjs/common';
import { StoryEntity } from 'src/entites/story.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoryService { constructor(
    @Inject('STORY_REPOSITORY') private readonly storyRepository: Repository<StoryEntity>) {
}

async findStoriesLikes(): Promise<StoryEntity[]> {
    return await this.storyRepository.find({ relations: ['likes'] });
  }

}