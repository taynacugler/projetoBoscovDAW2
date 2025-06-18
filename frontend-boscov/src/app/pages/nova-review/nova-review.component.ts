import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

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

interface ErrorMessage {
  show: boolean;
  text: string;
  type: 'error' | 'success' | 'warning';
}

@Component({
  selector: 'app-nova-review',
  standalone: true, 
  imports: [MenuComponent, CommonModule, WindowBoxComponent, AvaliacaoStarsComponent, AvaliacaoTextComponent, FilmeListComponent, ButtonComponent],
  templateUrl: './nova-review.component.html',
  styleUrls: ['./nova-review.component.css']
})
export class NovaAvaliacaoComponent implements OnInit {  
  filmes: Filme[] = [];
  filmeSelecionado: Filme | null = null;
  nota: number = 0;
  comentario: string = '';
  
  
  isLoadingFilmes: boolean = false;
  isEnviandoAvaliacao: boolean = false;
  
 
  message: ErrorMessage = {
    show: false,
    text: '',
    type: 'error'
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.buscarFilmes();
  }

  buscarFilmes() {
    this.isLoadingFilmes = true;
    this.hideMessage();
    
    this.http.get<Filme[]>('http://localhost:3000/filmes')
      .subscribe({
        next: (data) => {
          console.log('Filmes recebidos:', data);
          this.filmes = data;
          this.isLoadingFilmes = false;
          
         
          if (!data || data.length === 0) {
            this.showMessage('Nenhum filme disponível no momento.', 'warning');
          }
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro ao buscar filmes:', err);
          this.isLoadingFilmes = false;
          
          let errorMessage = 'Erro ao carregar a lista de filmes.';
          
          if (err.status === 0) {
            errorMessage = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
          } else if (err.status >= 500) {
            errorMessage = 'Erro interno do servidor. Tente novamente mais tarde.';
          } else if (err.status === 404) {
            errorMessage = 'Serviço de filmes não encontrado.';
          }
          
          this.showMessage(errorMessage, 'error');
        }
      });
  }

  onFilmeSelecionado(filme: Filme) {
    this.filmeSelecionado = filme;
    this.hideMessage(); 
  }

  private validarFormulario(): string | null {
    
    if (!this.filmeSelecionado) {
      return 'Por favor, selecione um filme para avaliar.';
    }

    
    if (this.nota === 0) {
      return 'Por favor, dê uma nota de 1 a 5 estrelas.';
    }

    
    if (this.nota < 1 || this.nota > 5) {
      return 'A nota deve estar entre 1 e 5 estrelas.';
    }

   
    if (!this.comentario || this.comentario.trim() === '') {
      return 'Por favor, escreva um comentário sobre o filme.';
    }

   
    if (this.comentario.trim().length < 10) {
      return 'O comentário deve ter pelo menos 10 caracteres.';
    }

    
    if (this.comentario.trim().length > 500) {
      return 'O comentário deve ter no máximo 500 caracteres.';
    }

    return null; 
  }

  private verificarAutenticacao(): boolean {
    const token = localStorage.getItem('token');
    
    if (!token || token.trim() === '') {
      this.showMessage('Você precisa estar logado para enviar uma avaliação.', 'error');
      return false;
    }
    
    return true;
  }

  enviarAvaliacao() {
    if (this.isEnviandoAvaliacao) {
      return;
    }

    if (!this.verificarAutenticacao()) {
      return;
    }

    const validationError = this.validarFormulario();
    if (validationError) {
      this.showMessage(validationError, 'error');
      return;
    }

    this.isEnviandoAvaliacao = true;
    this.hideMessage();

    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const payload = {
      idFilme: this.filmeSelecionado!.id,
      nota: this.nota,
      comentario: this.comentario.trim()
    };

    this.http.post('http://localhost:3000/avaliacoes', payload, { headers })
      .subscribe({
        next: (response) => {
          console.log('Avaliação enviada com sucesso:', response);
          this.isEnviandoAvaliacao = false;
          
          this.showMessage('Avaliação enviada com sucesso!', 'success');
          
          this.resetarFormulario();
        },
        error: (err: HttpErrorResponse) => {
          console.error('Erro ao enviar avaliação:', err);
          this.isEnviandoAvaliacao = false;
          
          let errorMessage = 'Erro ao enviar avaliação. Tente novamente.';
          
          if (err.status === 0) {
            errorMessage = 'Não foi possível conectar ao servidor. Verifique sua conexão.';
          } else if (err.status === 401) {
            errorMessage = 'Sessão expirada. Faça login novamente.';
          } else if (err.status === 403) {
            errorMessage = 'Você não tem permissão para enviar esta avaliação.';
          } else if (err.status === 409) {
            errorMessage = 'Você já avaliou este filme.';
          } else if (err.status === 422) {
            errorMessage = 'Dados inválidos. Verifique as informações e tente novamente.';
          } else if (err.status >= 500) {
            errorMessage = 'Erro interno do servidor. Tente novamente mais tarde.';
          }
          
          this.showMessage(errorMessage, 'error');
        }
      });
  }

  resetarFormulario() {
    this.filmeSelecionado = null;
    this.nota = 0;
    this.comentario = '';
  }

  showMessage(text: string, type: 'error' | 'success' | 'warning' = 'error') {
    this.message = {
      show: true,
      text,
      type
    };

    if (type === 'success') {
      setTimeout(() => {
        this.hideMessage();
      }, 5000);
    }
  }

  hideMessage() {
    this.message.show = false;
  }

  recarregarFilmes() {
    this.buscarFilmes();
  }

  get temFilmes(): boolean {
    return this.filmes.length > 0;
  }

  get podeEnviar(): boolean {
    return !this.isEnviandoAvaliacao && 
           !!this.filmeSelecionado && 
           this.nota > 0 && 
           this.comentario.trim().length >= 10;
  }
}