import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { WindowBoxComponent } from '../../shared/window-box/window-box.component';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

interface ErrorResponse {
  error: {
    message: string;
    code?: string;
    details?: any;
  };
  status: number;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, WindowBoxComponent, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  form: FormGroup;
  
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  showError = false;
  showSuccess = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService 
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9_-]+$/)]],
      dataNascimento: ['', [Validators.required, this.validarIdadeMinima(13)]],
    });
  }

  validarIdadeMinima(idadeMinima: number) {
    return (control: FormControl) => {
      if (!control.value) return null;
      
      const hoje = new Date();
      const nascimento = new Date(control.value);
      let idade = hoje.getFullYear() - nascimento.getFullYear();
      const mesAtual = hoje.getMonth();
      const mesNascimento = nascimento.getMonth();
      
      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
        idade--;
      }
      
      return idade < idadeMinima ? { idadeMinima: { requiredAge: idadeMinima, actualAge: idade } } : null;
    };
  }

  get nome(): FormControl { return this.form.get('nome') as FormControl; }
  get email(): FormControl { return this.form.get('email') as FormControl; }
  get senha(): FormControl { return this.form.get('senha') as FormControl; }
  get username(): FormControl { return this.form.get('username') as FormControl; }
  get dataNascimento(): FormControl { return this.form.get('dataNascimento') as FormControl; }

  getFieldErrorMessage(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (!field || !field.touched || !field.errors) return '';

    const errors = field.errors;

    switch (fieldName) {
      case 'nome':
        if (errors['required']) return 'Nome é obrigatório';
        if (errors['minlength']) return 'Nome deve ter pelo menos 2 caracteres';
        if (errors['maxlength']) return 'Nome deve ter no máximo 50 caracteres';
        break;

      case 'email':
        if (errors['required']) return 'Email é obrigatório';
        if (errors['email']) return 'Email deve ter um formato válido';
        break;

      case 'senha':
        if (errors['required']) return 'Senha é obrigatória';
        if (errors['minlength']) return 'Senha deve ter pelo menos 6 caracteres';
        if (errors['maxlength']) return 'Senha deve ter no máximo 20 caracteres';
        break;

      case 'username':
        if (errors['required']) return 'Username é obrigatório';
        if (errors['minlength']) return 'Username deve ter pelo menos 3 caracteres';
        if (errors['maxlength']) return 'Username deve ter no máximo 20 caracteres';
        if (errors['pattern']) return 'Username deve conter apenas letras, números, - e _';
        break;

      case 'dataNascimento':
        if (errors['required']) return 'Data de nascimento é obrigatória';
        if (errors['idadeMinima']) return `Você deve ter pelo menos ${errors['idadeMinima'].requiredAge} anos`;
        break;
    }

    return '';
  }

  private processarErroBackend(err: any): string {
    console.error('Erro completo do backend:', err);

    if (err.error && err.error.message) {
      const message = err.error.message.toLowerCase();
      
      if (message.includes('email') && message.includes('existe')) {
        return 'Este email já está cadastrado. Tente fazer login ou use outro email.';
      }
      
      if (message.includes('username') && message.includes('existe')) {
        return 'Este nome de usuário já está em uso. Escolha outro nome de usuário.';
      }
      
      if (message.includes('email') && message.includes('inválido')) {
        return 'Email fornecido é inválido. Verifique o formato do email.';
      }
      
      if (message.includes('senha') && message.includes('fraca')) {
        return 'Senha muito fraca. Use uma combinação de letras, números e símbolos.';
      }
      
      if (message.includes('dados') && message.includes('inválido')) {
        return 'Alguns dados fornecidos são inválidos. Verifique os campos e tente novamente.';
      }
      
      return err.error.message;
    }

    if (err.status) {
      switch (err.status) {
        case 400:
          return 'Dados inválidos. Verifique os campos e tente novamente.';
        case 409:
          return 'Usuário já existe. Tente fazer login ou use outros dados.';
        case 422:
          return 'Dados fornecidos não são válidos. Verifique os campos.';
        case 500:
          return 'Erro interno do servidor. Tente novamente mais tarde.';
        case 0:
          return 'Não foi possível conectar ao servidor. Verifique sua conexão.';
        default:
          return 'Erro inesperado. Tente novamente mais tarde.';
      }
    }

    return 'Erro ao cadastrar usuário. Tente novamente mais tarde.';
  }

  private limparMensagens(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.showError = false;
    this.showSuccess = false;
  }

  private mostrarErro(message: string): void {
    this.errorMessage = message;
    this.showError = true;
    this.showSuccess = false;
    
    setTimeout(() => {
      this.showError = false;
    }, 5000);
  }

  private mostrarSucesso(message: string): void {
    this.successMessage = message;
    this.showSuccess = true;
    this.showError = false;
    
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

  private validarFormularioCompleto(): boolean {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.mostrarErro('Por favor, corrija os erros no formulário antes de continuar.');
      return false;
    }

    const { nome, email, senha, username, dataNascimento } = this.form.value;

    if (!nome.trim()) {
      this.mostrarErro('Nome não pode estar vazio.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.mostrarErro('Por favor, insira um email válido.');
      return false;
    }

    if (senha.length < 6) {
      this.mostrarErro('Senha deve ter pelo menos 6 caracteres.');
      return false;
    }

    if (username.length < 3) {
      this.mostrarErro('Nome de usuário deve ter pelo menos 3 caracteres.');
      return false;
    }

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    if (nascimento >= hoje) {
      this.mostrarErro('Data de nascimento deve ser anterior à data atual.');
      return false;
    }

    return true;
  }

  onSubmit(): void {
    if (this.isLoading) {
      return;
    }

    this.limparMensagens();

 
    if (!this.validarFormularioCompleto()) {
      return;
    }

    this.isLoading = true;

    const dadosCadastro = {
      nome: this.form.value.nome.trim(),
      email: this.form.value.email.trim().toLowerCase(),
      senha: this.form.value.senha,
      username: this.form.value.username.trim(),
      dataNascimento: this.form.value.dataNascimento
    };

    console.log('Enviando cadastro com dados:', { ...dadosCadastro, senha: '[HIDDEN]' });

    this.authService.register(dadosCadastro).subscribe({
      next: (res) => {
        console.log('Usuário cadastrado com sucesso:', res);
        this.isLoading = false;
        
        this.mostrarSucesso('Cadastro realizado com sucesso! Redirecionando para o login...');
        
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        console.error('Erro no cadastro:', err);
        this.isLoading = false;
        
        const mensagemErro = this.processarErroBackend(err);
        this.mostrarErro(mensagemErro);
      }
    });
  }

  voltar(): void {
    if (this.isLoading) {
      return;
    }
    this.router.navigate(['/login']);
  }

  fecharMensagem(): void {
    this.limparMensagens();
  }
}