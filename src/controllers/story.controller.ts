import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StoryService } from 'src/services/story.service';

@Controller('stories')
export class StoryController {

    constructor(private readonly storyService: StoryService) {

    }

    @Get()
    async findstory(){
        const response = await this.storyService.finAll()
        return response;
    }

    @Get(':id')
    async findOnestory(@Param('id') id : string){
      const response = await this.storyService.find(id)
      return response;
    }

    @Put(':id')
    async updatestory(@Param('id') id:string, @Body() payload:any){
      const response = await this.storyService.update(id, payload)
      return response;
    }



}
