import { IsString, IsUUID, IsOptional, IsNotEmpty, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(5000, { message: 'El texto no puede superar los 5000 caracteres.' }) // Puedes ajustar el límite si es necesario
  text: string;

  @IsString()
  @IsOptional()
  media?: string;

  @IsString()
  @IsNotEmpty()
  tag: string;

  @IsUUID()
  @IsNotEmpty()
  userId: string;
}
