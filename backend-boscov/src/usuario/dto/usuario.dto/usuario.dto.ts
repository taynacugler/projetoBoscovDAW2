export class UsuarioDto {}
// dto/usuario.dto.ts

import { IsString, IsEmail, IsEnum, IsDate } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nome: string;

  @IsString()
  senha: string;

  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsEnum(['adm', 'comum'])
  tipoUsuario: 'adm' | 'comum';

  @IsDate()
  dataNascimento: Date;
  
  @IsString()
  status: string; 
}

export class UpdateUsuarioDto {
  @IsString()
  nome: string;

  @IsString()
  senha: string;

  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsEnum(['adm', 'comum'])
  tipoUsuario: 'adm' | 'comum';

  @IsDate()
  dataNascimento: Date;
}
