import { IsString, IsInt, IsArray, ArrayNotEmpty } from 'class-validator';

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

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })  // garante que cada elemento do array seja inteiro
  generosIds: number[];
}
