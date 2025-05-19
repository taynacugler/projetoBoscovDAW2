import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { WindowBoxComponent } from '../../shared/window-box/window-box.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, WindowBoxComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

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

  // Getters para facilitar acesso no template
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.form.get('senha') as FormControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const credentials = {
        email: this.form.value.email,
        senha: this.form.value.senha
      };

      this.authService.login(credentials).subscribe({
        next: (res: { token: string; user: any; }) => {
          console.log('Usuário autenticado com sucesso:', res);
          // Salvar token no localStorage (opcional)
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));

          alert('Login realizado com sucesso!');
          this.router.navigate(['/perfil']); // ou a rota desejada após login
        },
        error: (err: any) => {
          console.error('Erro ao autenticar:', err);
          alert('Email ou senha incorretos.');
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  irParaCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
}
