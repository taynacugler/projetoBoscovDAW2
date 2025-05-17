import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { WindowBoxComponent } from '../../shared/window-box/window-box.component';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, WindowBoxComponent],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // <-- INJETADO AQUI
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      status: ['', Validators.required],
      username: ['', Validators.required],
      dataNascimento: ['', Validators.required],
    });
  }

  // Getters
  get nome(): FormControl {
    return this.form.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.form.get('senha') as FormControl;
  }

  get status(): FormControl {
    return this.form.get('status') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get dataNascimento(): FormControl {
    return this.form.get('dataNascimento') as FormControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        dataNascimento: new Date(this.form.value.dataNascimento),
        tipoUsuario: 'COMUM' // Pode ser fixo ou dinâmico se quiser
      };

      this.authService.register(formData).subscribe({
        next: () => {
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/login']);
        },
        error: (err: { error: { message: any } }) => {
          alert('Erro ao cadastrar: ' + (err.error.message || 'Erro desconhecido'));
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  voltar(): void {
    this.router.navigate(['/login']);
  }
}
