import { Inject, Injectable } from '@nestjs/common';
import { StoryEntity } from 'src/entites/story.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoryService {
  constructor(
    @Inject('STORY_REPOSITORY') private readonly storyRepository: Repository<StoryEntity>) {
  }

  async finAll() {
    const story = await this.storyRepository.find();
    return story;
  }

  async find(id: string) {
    const story = await this.storyRepository.findOne({ where: { id } });
    return story;
  }

  create(payload: any) {
    const story = this.storyRepository.create()
    story.photo = payload.photo;


    return this.storyRepository.save(story);
  }

  async update(id: string, payload: any) {
    const story = await this.storyRepository.findOne({ where: { id } })
    story.photo = payload.photo;

    return this.storyRepository.save(story)

  }




}