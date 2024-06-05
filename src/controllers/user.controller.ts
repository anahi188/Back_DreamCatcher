import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';


@Controller('users')
export class UserController {

  @Get()
  findUsers(
    @Query() queryParams:any
  ){
    return queryParams;
  }
  
  @Get(':id/:name/:lastname/:email/:password')
  findOneUser(
    @Param('id') id:number, 
    @Param('name') name :string, 
    @Param('lastname') lastname :string, 
    @Param('email') email :string, 
    @Param('password') password :string, 
    ){
    return id;
  }

  @Post()
  create(@Body() payload:any){
    return payload;
  }

  @Put(':id')
  update(@Param('iduser') id:number, @Body() payload:any){
    return payload;
  }

  @Delete(':id')
  delete(
    @Param('id') id: number
    ){
    return 'Eliminadoñ';
  }

}
