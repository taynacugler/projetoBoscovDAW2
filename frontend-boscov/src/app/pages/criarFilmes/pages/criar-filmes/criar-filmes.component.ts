import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { WindowBoxComponent } from '../../../../shared/window-box/window-box.component';
import { Router } from '@angular/router';
import { FilmeService } from '../../../../shared/models/filme.service';

import { MenuComponent } from '../../../../shared/components/menu/menu.component';
@Component({
  selector: 'app-criar-filmes',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, WindowBoxComponent, MenuComponent],
  templateUrl: './criar-filmes.component.html',
  styleUrls: ['./criar-filmes.component.css']
})
export class CriarFilmesComponent {

  form: FormGroup;
  router: any;

  constructor(private fb: FormBuilder, private filmeService: FilmeService, private _router: Router) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      diretor: ['', Validators.required],
      anoLancamento: ['', Validators.required],
      duracao: ['', Validators.required],
      produtora: ['', Validators.required],
      classificacao: ['', Validators.required],
      poster: ['', Validators.required],
    });
    this.router = this._router;
  }

  get nome() { return this.form.get('nome') as FormControl; }
  get diretor() { return this.form.get('diretor') as FormControl; }
  get anoLancamento() { return this.form.get('anoLancamento') as FormControl; }
  get duracao() { return this.form.get('duracao') as FormControl; }
  get produtora() { return this.form.get('produtora') as FormControl; }
  get classificacao() { return this.form.get('classificacao') as FormControl; }
  get poster() { return this.form.get('poster') as FormControl; }

 onSubmit() {
  if (this.form.valid) {
    const formData = {
      ...this.form.value,
      anoLancamento: Number(this.form.value.anoLancamento),
      duracao: Number(this.form.value.duracao),
    };

    console.log('Dados ajustados para enviar:', formData);

    this.filmeService.criar(formData).subscribe({
      next: (res) => {
        console.log('Filme criado com sucesso:', res);
        this.router.navigate(['/lista-filmes']);
      },
      error: (err) => {
        console.error('Erro ao criar filme:', err);
      }
    });
  } else {
    console.warn('Formulário inválido');
  }
}

}
