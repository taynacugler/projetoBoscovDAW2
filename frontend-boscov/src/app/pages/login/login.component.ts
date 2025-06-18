import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { WindowBoxComponent } from '../../shared/window-box/window-box.component';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, WindowBoxComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.form.get('senha') as FormControl;
  }

  private limparMensagens(): void {
    this.mensagemErro = null;
    this.mensagemSucesso = null;
  }

  private mostrarMensagemErroValidacao(): void {
    const erros: string[] = [];

    if (this.email.invalid && this.email.touched) {
      if (this.email.errors?.['required']) {
        erros.push('Email é obrigatório');
      } else if (this.email.errors?.['email']) {
        erros.push('Email deve ter um formato válido');
      }
    }

    if (this.senha.invalid && this.senha.touched) {
      if (this.senha.errors?.['required']) {
        erros.push('Senha é obrigatória');
      }
    }

    if (erros.length > 0) {
      this.mensagemErro = erros.join(', ');
    }
  }

  onSubmit(): void {
    this.limparMensagens();

    if (this.form.valid) {
      const credentials = {
        email: this.form.value.email,
        senha: this.form.value.senha
      };

      this.authService.login(credentials).subscribe({
        next: (res: { token: string; user: any; }) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          
          this.mensagemSucesso = 'Login realizado com sucesso! Redirecionando...';
          
          setTimeout(() => {
            this.router.navigate(['/perfil']);
          }, 1500);
        },
        error: (erro) => {
          console.error('Erro no login:', erro);
          
          if (erro.status === 401) {
            this.mensagemErro = 'Email ou senha incorretos.';
          } else if (erro.status === 0) {
            this.mensagemErro = 'Erro de conexão. Verifique sua internet.';
          } else if (erro.status >= 500) {
            this.mensagemErro = 'Erro no servidor. Tente novamente mais tarde.';
          } else {
            this.mensagemErro = 'Erro inesperado. Tente novamente.';
          }
        }
      });
    } else {
      this.form.markAllAsTouched();
      this.mostrarMensagemErroValidacao();
    }
  }

  irParaCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
}