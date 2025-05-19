import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { WindowBoxComponent } from '../../shared/window-box/window-box.component';
import { AvaliacaoStarsComponent } from '../../shared/components/avaliacao-stars/avaliacao-stars.component';
import { AvaliacaoTextComponent } from '../../shared/components/avaliacao-text/avaliacao-text.component';
import { FilmeListComponent } from '../../shared/components/filme-list/filme-list.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';

interface Filme {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-nova-review',
  standalone: true, // se estiver usando Angular 14+ e standalone components
  imports: [MenuComponent, CommonModule, WindowBoxComponent, AvaliacaoStarsComponent, AvaliacaoTextComponent, FilmeListComponent, ButtonComponent],
  templateUrl: './nova-review.component.html',
  styleUrls: ['./nova-review.component.css']
})
export class NovaAvaliacaoComponent implements OnInit {  // classe com nome alinhado ao selector e arquivo
  filmes: Filme[] = [];
  filmeSelecionado: Filme | null = null;
  nota: number = 0;
  comentario: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.buscarFilmes();
  }

buscarFilmes() {
  this.http.get<Filme[]>('http://localhost:3000/filmes')
    .subscribe({
      next: data => {
        console.log('✅ Filmes recebidos:', data);
        this.filmes = data;
      },
      error: err => {
        console.error('❌ Erro ao buscar filmes:', err);
      }
    });
}

  onFilmeSelecionado(filme: Filme) {
    this.filmeSelecionado = filme;
  }

  enviarAvaliacao() {
    if (!this.filmeSelecionado || this.nota === 0 || this.comentario.trim() === '') {
      alert('Preencha todos os campos!');
      return;
    }

    const token = localStorage.getItem('token') || '';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const payload = {
      idFilme: this.filmeSelecionado.id,
      nota: this.nota,
      comentario: this.comentario
    };

    this.http.post('http://localhost:3000/avaliacoes', payload, { headers })
      .subscribe({
        next: () => alert('Avaliação enviada com sucesso!'),
        error: err => alert('Erro ao enviar avaliação: ' + (err.message || err.statusText))
      });
  }
}
