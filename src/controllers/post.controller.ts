import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostService } from "src/services/post.service";

@Controller('posts')

export class PostController{
    
    constructor(private readonly postService: PostService){

    }
  
    @Get()
    async findpost(){
      const response = await this.postService.finAll()
      return response;
    }
    
    @Get(':id')
    async findOnepost(@Param('id') id : string){
      const response = await this.postService.finAOne(id)
      return response;
    }
  
    @Post()
    async createPost(@Body() payload:any){
      const response = await this.postService.create(payload)
      return response;
    }
  
    @Put(':id')
    async updatePost(@Param('id') id:string, @Body() payload:any){
      const response = await this.postService.update(id, payload)
      return response;
    }
  
    @Delete(':id')
    async deletePost(@Param('id') id: string){
        const response = await this.postService.delete(id);
        return response;
    }
}