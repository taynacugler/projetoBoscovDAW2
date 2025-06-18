import { Component, OnInit } from '@angular/core';
import { Filme } from '../../shared/models/filme.model';
import { FilmeService } from '../../shared/models/filme.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { WindowBoxComponent } from '../../shared/window-box/window-box.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [MenuComponent, CommonModule, WindowBoxComponent, FormsModule],
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  filmes: Filme[] = [];
  carregando = true;
  erro = '';
  paginaAtual = 1;
  itensPorPagina = 5;

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmeService.listarTodos().subscribe({
      next: (dados) => {
        this.filmes = dados;
        this.carregando = false;
      },
      error: (err) => {
        this.erro = 'Erro ao carregar filmes';
        this.carregando = false;
        console.error(err);
      },
    });
  }

  getDescricaoGeneros(filme: Filme): string {
    return filme.generos?.map(gf => gf.genero?.descricao).join(', ') || '';
  }

  getMediaNotas(filme: Filme): number {
    const avaliacoesValidas = filme.avaliacoes?.filter(a => a.deletedAt === null) || [];
    if (avaliacoesValidas.length === 0) return 0;
    const soma = avaliacoesValidas.reduce((acc, avaliacao) => acc + avaliacao.nota, 0);
    console.log(`Soma das notas: ${soma}, Avaliações válidas: ${avaliacoesValidas.length}`);
    if (soma === 0) return 0;
    return +(soma / avaliacoesValidas.length).toFixed(1);
  }

  // NOVOS MÉTODOS - Adicione estes
  getRatingStars(filme: Filme): number {
    const media = this.getMediaNotas(filme);
    
    // Se não houver nota válida, retorna 0
    if (media === 0) {
      return 0;
    }
    
    // Assumindo que sua escala é 0-10, converte para 0-5 estrelas
    return media;
  }

  mathFloor(value: number): number {
    return Math.floor(value);
  }

  mathMin(a: number, b: number): number {
    return Math.min(a, b);
  }

  get filmesPaginados(): Filme[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return this.filmes.slice(inicio, fim);
  }

  get totalPaginas(): number {
    return Math.ceil(this.filmes.length / this.itensPorPagina);
  }

  avancarPagina(): void {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
    }
  }

  voltarPagina(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
    }
  }
}