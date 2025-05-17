export class UsuarioDto {}
// dto/usuario.dto.ts

import { IsString, IsEmail, IsEnum, IsDate, IsDateString } from 'class-validator';

import { IsOptional } from 'class-validator';


export class CreateUsuarioDto {
  @IsString()
  nome: string;

  @IsString()
  senha: string;

  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsDateString()
  dataNascimento: string;

  @IsString()
  status: string;
}

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  senha?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsDate()
  dataNascimento?: Date;
}
