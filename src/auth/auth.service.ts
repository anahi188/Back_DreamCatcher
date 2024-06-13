import { Injectable } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService) { }

    async register(registerDto: RegisterDto) {
        return await this.userService.create(registerDto)
    }

    login() {
        return "login"
    }

}
