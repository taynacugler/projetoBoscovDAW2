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