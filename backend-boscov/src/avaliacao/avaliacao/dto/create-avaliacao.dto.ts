import { IsNumber, IsString } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsNumber()
  idFilme: number;

  @IsNumber()
  nota: number;

  @IsString()
  comentario: string;
}
