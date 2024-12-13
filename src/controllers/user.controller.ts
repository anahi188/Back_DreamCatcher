import { BadRequestException, Body, Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @UseInterceptors(
    FilesInterceptor('files', 10, { // Permitir hasta 10 archivos
      storage: diskStorage({
        destination: './uploads', // Guardar todos los archivos en una única carpeta
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async createUser(
    @UploadedFiles() files: Express.Multer.File[], // Recepciona los archivos
    @Body() payload: CreateUserDto,
  ) {
    console.log('Payload:', payload);
    console.log('Files:', files); // Aquí puedes ver los archivos que recibes

    // Verificación básica de campos
    if (!payload.firstname || !payload.lastname) {
      throw new BadRequestException('Firstname and Lastname are required');
    }

    // Encuentra los archivos específicos según su fieldname
    const avatar = files.find(file => file.fieldname === 'avatar');
    const backgroundImage = files.find(file => file.fieldname === 'backgroundImage');

    const newUser = await this.userService.create({
      ...payload,
      avatar: avatar ? avatar.filename : null,
      backgroundImage: backgroundImage ? backgroundImage.filename : null,
    });

    return newUser;
  }
}
