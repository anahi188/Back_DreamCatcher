import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResolverService } from 'src/services/resolver.service';

@Controller('resolvers')
export class ResolverController {
  constructor(private readonly resolverService: ResolverService) {}

  @Get('')
  async findresolver() {
    const response = await this.resolverService.finAll();
    return response;
  }

  @Get(':id')
  async findOneresolver(@Param('id') id: string) {
    const response = await this.resolverService.find(id);
    return response;
  }

  @Post()
  async createresolver(@Body() payload: any) {
    const response = await this.resolverService.create(payload);
    return response;
  }
}
