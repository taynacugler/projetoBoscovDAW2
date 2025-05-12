import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { WindowBoxComponent } from '../../shared/window-box/window-box.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, WindowBoxComponent],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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
      console.log('Dados cadastrados:', this.form.value);
      // Aqui você pode enviar os dados para um serviço ou API
    } else {
      this.form.markAllAsTouched();
    }
  }

  voltar(): void {
    this.router.navigate(['/login']);
  }
}
