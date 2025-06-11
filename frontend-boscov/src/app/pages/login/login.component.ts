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

  onSubmit(): void {
    this.mensagemErro = null;
    this.mensagemSucesso = null;

    if (this.form.valid) {
      const credentials = {
        email: this.form.value.email,
        senha: this.form.value.senha
      };

      this.authService.login(credentials).subscribe({
        next: (res: { token: string; user: any; }) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));

          this.mensagemSucesso = 'Login realizado com sucesso!';
          setTimeout(() => {
            this.router.navigate(['/perfil']);
          }, 1500);
        },
        error: () => {
          this.mensagemErro = 'Email ou senha incorretos.';
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
