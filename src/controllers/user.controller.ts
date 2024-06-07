import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from 'src/services/user.service';


@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService){

  }

  @Get()
  async findUsers(){
    const response = await this.userService.finAll()
    return response;
  }
  
  @Get(':id')
  async findOneUser(@Param('id') id : string){
    const response = await this.userService.finAOne(id)
    return response;
  }

  @Post()
  async createUser(@Body() payload:any){
    const response = await this.userService.create(payload)
    return response;
  }

  @Put(':id')
  async updateUser(@Param('id') id:string, @Body() payload:any){
    const response = await this.userService.update(id, payload)
    return response;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string){
      const response = await this.userService.delete(id);
      return response;
  }

}
