import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('users')
export class AppController {

  @Get()
  findUsers(
    @Query() queryParams: any
  ) {
    return queryParams;
  }

  @Get(':id/:state')
  findOneUser(
    @Param('id') id: number,
    @Param('state') state: boolean
  ) {
    return state;
  }

  @Post()
  create(@Body() payload: any) {
    return payload;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return '';
  }

  @Delete(':id')
  delete(
    @Param('id') id: number
  ) {
    return 'Eliminadoñ';
  }

}
