import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(): string {
    const response = await this.userService.findAll ();
    return respuesta; 
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
}
