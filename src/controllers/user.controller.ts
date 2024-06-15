
import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()

  async findUsers() {
    const response = await this.userService.finAll();
    return response;
  }

  @Get(':id')
  async findOneUser(@Param('id') id: string) {
    const response = await this.userService.finAOne(id);

    return response;
  }

  @Post()

  // @UseInterceptors(FileInterceptor('image'))
  // async createUser(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() payload: any,
  // ) {
  //   console.log('Received payload:', payload);
  //   console.log('Received file:', file);

  //   const response = await this.userService.create({
  //     ...payload,
  //     image: file ? file.filename : null,
  //   });

  //   return response;
  // }

  @Put(':id')

  // @UseInterceptors(FileInterceptor('image'))
  // async updateUser(@Param('id') id: string, @UploadedFile() file: Express.Multer.File, @Body() payload: any) {
  //   console.log('Received payload for update:', payload);
  //   console.log('Received file for update:', file);

  //   const response = await this.userService.update(id, {
  //     ...payload,
  //     image: file ? file.filename : null,
  //   });

  //   return response;
  // }

  @Delete(':id')

  async deleteUser(@Param('id') id: string) {
    const response = await this.userService.delete(id);
    return response;

  }
}
