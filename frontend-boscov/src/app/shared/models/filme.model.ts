export interface Filme {
  id: number;
  nome: string;
  diretor: string;
  anoLancamento: number;
  duracao: number;
  produtora: string;
  classificacao: string;
  poster: string;
 // deletedAt?: string; // ou Date, dependendo do formato retornado pelo backend
 // generos: GeneroFilme[]; // Você precisa definir esse tipo também
  //avaliacoes: Avaliacao[]; // Você precisa definir esse tipo também
}