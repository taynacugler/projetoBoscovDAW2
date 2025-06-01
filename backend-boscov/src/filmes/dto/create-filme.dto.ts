import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  nome: string;

  @IsString()
  diretor: string;

  @IsInt()
  anoLancamento: number;

  @IsInt()
  duracao: number;

  @IsString()
  produtora: string;

  @IsString()
  classificacao: string;

  @IsString()
  poster: string;

  @IsOptional()
  deletedAt?: Date;
}
