import { Component, OnInit } from '@angular/core';import { Filme } from '../../shared/models/filme.model';
import { FilmeService } from '../../shared/models/filme.service';
;

@Component({
  selector: 'app-todos-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class TodosFilmesComponent implements OnInit {
  filmes: Filme[] = [];
  carregando = true;
  erro = '';

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
      }
    });
  }
}