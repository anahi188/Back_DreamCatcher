import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { PostService } from "src/services/post.service";

@Controller('posts')

export class PostController{
    
    constructor(private readonly postService: PostService){

    }
  
    @Get()
  async findPosts() {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOnePost(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Get('user/:userId/friends')
  async findPostsForUserAndFriends(@Param('userId') userId: string) {
    return this.postService.findPostsForUserAndFriends(userId);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/posts',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))

  async createPost(
    @UploadedFile() file: Express.Multer.File,
    @Body('userId') userId: string,
    @Body('commentId') commentId: string, // Asegúrate de ajustar si 'commentId' es el campo correcto
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const posts = await this.postService.createPost(file.filename, userId, commentId);
    return posts;
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/posts',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  async updatePost(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('commentId') commentId: string, // Asegúrate de ajustar si 'commentId' es el campo correcto
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const updatedPost = await this.postService.updatePost(id, file.filename, commentId);
    return updatedPost;
  }
}