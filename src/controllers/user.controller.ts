
import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UserService } from 'src/services/user.service';
import * as bcryptjs from 'bcryptjs';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
  
  @Get()

  async findUsers() {
    const users = await this.userService.findAll();
    return users.map(user => ({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      image: user.image,
      description: user.description,
      countryId: user.country ? user.country.id : null,
      roleId: user.role ? user.role.id : null,
    }));
  }

  @Get(':id')
  async findOneUser(@Param('id') id: string) {
    const response = await this.userService.finAOne(id);
    return response;
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createUser(
    @UploadedFile() file: Express.Multer.File,
    @Body() payload: any,
  ) {
    console.log('Received payload:', payload);
    console.log('Received file:', file);

    // Hashear la contraseña antes de crear el usuario
    if (payload.password) {
      payload.password = await bcryptjs.hash(payload.password, 10);
    }

    const newUser = await this.userService.create({
      ...payload,
      image: file ? file.filename : null,
    });
    return response;
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async updateUser(@Param('id') id: string, @UploadedFile() file: Express.Multer.File, @Body() payload: any) {
    const updatedUser = await this.userService.update(id, {
      ...payload,
      image: file ? file.filename : null,
    });
    return response;
  }

  @Delete(':id')

  async deleteUser(@Param('id') id: string) {
    const response = await this.userService.delete(id);
    return response;
  }
}
