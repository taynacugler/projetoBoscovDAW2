import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { WindowBoxComponent } from '../../../../shared/window-box/window-box.component';
import { Router } from '@angular/router';
import { FilmeService } from '../../../../shared/models/filme.service';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';
import { GeneroService } from '../../../../shared/models/genero.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-filmes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    WindowBoxComponent,
    MenuComponent, 
    CommonModule
  ],
  templateUrl: './criar-filmes.component.html',
  styleUrls: ['./criar-filmes.component.css']
})
export class CriarFilmesComponent implements OnInit {
  form: FormGroup;
  generos: { id: number; descricao: string }[] = [];
  
  // Estados para controle de mensagens
  isLoading = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  errorMessage = '';
  successMessage = '';
  generosCarregando = true;
  erroCarregarGeneros = false;

  constructor(
    private fb: FormBuilder,
    private filmeService: FilmeService,
    private generoService: GeneroService,
    private _router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      diretor: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      anoLancamento: ['', [
        Validators.required, 
        Validators.min(1900), 
        Validators.max(new Date().getFullYear() + 2)
      ]],
      duracao: ['', [Validators.required, Validators.min(1), Validators.max(600)]],
      produtora: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      classificacao: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      poster: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      generosIds: [[], [Validators.required, this.minArrayLength(1)]],
    });
  }

  ngOnInit() {
    this.carregarGeneros();
  }

  // Validador customizado para array com tamanho mínimo
  minArrayLength(min: number) {
    return (control: any) => {
      if (control.value && control.value.length >= min) {
        return null;
      }
      return { minArrayLength: { requiredLength: min, actualLength: control.value?.length || 0 } };
    };
  }

  carregarGeneros() {
    this.generosCarregando = true;
    this.erroCarregarGeneros = false;
    
    this.generoService.listarTodos().subscribe({
      next: (generos) => {
        console.log('Gêneros recebidos:', generos);
        this.generos = generos;
        this.generosCarregando = false;
        
        if (generos.length === 0) {
          this.mostrarErro('Nenhum gênero disponível. Entre em contato com o administrador.');
        }
      },
      error: (err) => {
        console.error('Erro ao buscar gêneros:', err);
        this.generosCarregando = false;
        this.erroCarregarGeneros = true;
        this.mostrarErro('Erro ao carregar os gêneros. Tente novamente.');
      }
    });
  }

  // Getters para os controles do formulário
  get nome() { return this.form.get('nome') as FormControl; }
  get diretor() { return this.form.get('diretor') as FormControl; }
  get anoLancamento() { return this.form.get('anoLancamento') as FormControl; }
  get duracao() { return this.form.get('duracao') as FormControl; }
  get produtora() { return this.form.get('produtora') as FormControl; }
  get classificacao() { return this.form.get('classificacao') as FormControl; }
  get poster() { return this.form.get('poster') as FormControl; }
  get generosIds() { return this.form.get('generosIds') as FormControl; }

  onGeneroToggle(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const selectedIds = this.generosIds.value as number[];
    
    if (checkbox.checked) {
      this.generosIds.setValue([...selectedIds, Number(checkbox.value)]);
    } else {
      this.generosIds.setValue(selectedIds.filter(id => id !== Number(checkbox.value)));
    }
    
    // Marca o campo como tocado para mostrar validação
    this.generosIds.markAsTouched();
  }

  onSubmit() {
    // Limpa mensagens anteriores
    this.limparMensagens();
    
    // Previne múltiplos submits
    if (this.isLoading) {
      return;
    }
    
    if (this.form.valid) {
      this.isLoading = true;
      this.form.disable(); // Desabilita o formulário durante o loading
      
      const formData = {
        ...this.form.value,
        anoLancamento: Number(this.form.value.anoLancamento),
        duracao: Number(this.form.value.duracao),
        generosIds: this.form.value.generosIds.map((id: any) => Number(id)),
      };

      this.filmeService.criar(formData).subscribe({
        next: (res) => {
          console.log('Filme criado com sucesso:', res);
          this.isLoading = false;
          this.form.enable(); // Reabilita o formulário
          this.mostrarSucesso('Filme criado com sucesso!');
          
          // Navega após 2 segundos para o usuário ver a mensagem
          setTimeout(() => {
            this._router.navigate(['/lista-filmes']);
          }, 2000);
        },
        error: (err) => {
          console.error('Erro ao criar filme:', err);
          this.isLoading = false;
          this.form.enable(); // Reabilita o formulário em caso de erro
          this.tratarErroSubmissao(err);
        }
      });
    } else {
      // Marca todos os campos como tocados para exibir erros de validação
      this.form.markAllAsTouched();
      this.mostrarErro('Por favor, corrija os erros no formulário antes de prosseguir.');
    }
  }

  private tratarErroSubmissao(erro: any) {
    let mensagem = 'Erro inesperado ao criar o filme. Tente novamente.';
    
    if (erro.error) {
      if (erro.error.message) {
        mensagem = erro.error.message;
      } else if (erro.error.errors) {
        // Se houver erros de validação específicos do backend
        const erros = Object.values(erro.error.errors).flat();
        mensagem = `Erros encontrados: ${erros.join(', ')}`;
      }
    } else if (erro.status === 400) {
      mensagem = 'Dados inválidos. Verifique as informações e tente novamente.';
    } else if (erro.status === 409) {
      mensagem = 'Já existe um filme com esse nome.';
    } else if (erro.status === 500) {
      mensagem = 'Erro interno do servidor. Tente novamente mais tarde.';
    } else if (erro.status === 0) {
      mensagem = 'Erro de conexão. Verifique sua internet e tente novamente.';
    }
    
    this.mostrarErro(mensagem);
  }

  private mostrarSucesso(mensagem: string) {
    this.successMessage = mensagem;
    this.showSuccessMessage = true;
    this.showErrorMessage = false;
  }

  private mostrarErro(mensagem: string) {
    this.errorMessage = mensagem;
    this.showErrorMessage = true;
    this.showSuccessMessage = false;
  }

  private limparMensagens() {
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    this.successMessage = '';
    this.errorMessage = '';
  }

  recarregarGeneros() {
    this.carregarGeneros();
  }

  // Método para obter mensagem de erro específica para cada campo
  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    
    if (!control || !control.errors || !control.touched) {
      return '';
    }

    const errors = control.errors;
    
    switch (controlName) {
      case 'nome':
        if (errors['required']) return 'Nome é obrigatório';
        if (errors['minlength']) return 'Nome deve ter pelo menos 2 caracteres';
        if (errors['maxlength']) return 'Nome deve ter no máximo 100 caracteres';
        break;
        
      case 'diretor':
        if (errors['required']) return 'Diretor é obrigatório';
        if (errors['minlength']) return 'Nome do diretor deve ter pelo menos 2 caracteres';
        if (errors['maxlength']) return 'Nome do diretor deve ter no máximo 100 caracteres';
        break;
        
      case 'anoLancamento':
        if (errors['required']) return 'Ano de lançamento é obrigatório';
        if (errors['min']) return 'Ano deve ser maior que 1900';
        if (errors['max']) return `Ano não pode ser maior que ${new Date().getFullYear() + 2}`;
        break;
        
      case 'duracao':
        if (errors['required']) return 'Duração é obrigatória';
        if (errors['min']) return 'Duração deve ser maior que 0 minutos';
        if (errors['max']) return 'Duração deve ser menor que 600 minutos (10 horas)';
        break;
        
      case 'produtora':
        if (errors['required']) return 'Produtora é obrigatória';
        if (errors['minlength']) return 'Nome da produtora deve ter pelo menos 2 caracteres';
        if (errors['maxlength']) return 'Nome da produtora deve ter no máximo 100 caracteres';
        break;
        
      case 'classificacao':
        if (errors['required']) return 'Classificação é obrigatória';
        if (errors['minlength']) return 'Classificação deve ter pelo menos 1 caractere';
        if (errors['maxlength']) return 'Classificação deve ter no máximo 10 caracteres';
        break;
        
      case 'poster':
        if (errors['required']) return 'URL do poster é obrigatória';
        if (errors['pattern']) return 'URL deve começar com http:// ou https://';
        break;
        
      case 'generosIds':
        if (errors['required']) return 'Selecione pelo menos um gênero';
        if (errors['minArrayLength']) return 'Selecione pelo menos um gênero';
        break;
    }
    
    return 'Campo inválido';
  }
}