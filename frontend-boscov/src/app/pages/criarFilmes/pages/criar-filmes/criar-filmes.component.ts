import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from '../../../../shared/models/filme.service';
import { Filme } from '../../../../shared/models/filme.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-filmes',
  standalone: true,   // <-- ATENÇÃO: ativo standalone
  imports: [CommonModule, FormsModule],  // importa módulos aqui
  templateUrl: './criar-filmes.component.html',
  styleUrls: ['./criar-filmes.component.css']
})
export class CriarFilmesComponent {
  filme: Omit<Filme, 'id'> = {  
    nome: '',
    diretor: '',
    anoLancamento: 0,
    duracao: 0,
    produtora: '',
    classificacao: '',
    poster: ''
  };

  constructor(private filmesService: FilmeService, private router: Router) {}

  onSubmit() {
    this.filmesService.criar(this.filme).subscribe({
      next: () => {
        alert('Filme criado com sucesso!');
        this.router.navigate(['/filmes']);
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao criar filme');
      }
    });
  }
}
