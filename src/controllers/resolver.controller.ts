import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResolverService } from 'src/services/resolver.service';

@Controller('resolvers')
export class ResoverController {

  constructor(private readonly resolverServices:ResolverService){

  }
  @Get(':id')
  async find(@Param('id')id: string) {
    const response = await this.resolverServices.find(id);
    return response;
  }

  @Post()
  async create(@Body() payload: any) {
  const response = await this.resolverServices.create(payload);
    console.log (response)
  }

  
}
