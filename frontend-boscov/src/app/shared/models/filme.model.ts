export interface Filme {
  id: number;
  nome: string;
  diretor: string;
  anoLancamento: number;
  duracao: number;
  produtora: string;
  classificacao: string;
  poster: string;
  deletedAt?: string;
  generos: GeneroFilme[]; 
  avaliacoes: Avaliacao[];
}

export interface GeneroFilme {
  idGenero: number;
  idFilme: number;
  genero: Genero; 
}

export interface Genero {
  id: number;
  descricao: string;
}

export interface Avaliacao {
  idUsuario: number;
  idFilme: number;
  nota: number;
  comentario: string;
  deletedAt: string | null;
}
