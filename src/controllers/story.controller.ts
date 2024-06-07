import { Controller, Get } from '@nestjs/common';
import { StoryService } from 'src/services/story.service';

@Controller('stories')
export class StoryController {

    constructor(private readonly storyServices: StoryService) {

       // @Get()
        //async findStoriesLikes() {
            //const storiesWithLikes = await this.storyServices.findStoriesLikes();
            //return storiesWithLikes;
        //}

    }


}
