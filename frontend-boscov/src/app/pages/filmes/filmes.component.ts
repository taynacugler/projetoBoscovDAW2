import { Component, OnInit } from '@angular/core';import { Filme } from '../../shared/models/filme.model';
import { FilmeService } from '../../shared/models/filme.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { WindowBoxComponent } from '../../shared/window-box/window-box.component';

;

@Component({
  selector: 'app-filmes',
  imports: [MenuComponent, CommonModule,WindowBoxComponent],
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
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