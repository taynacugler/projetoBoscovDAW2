import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { WindowBoxComponent } from '../../../../shared/window-box/window-box.component';
import { Router } from '@angular/router';
import { FilmeService } from '../../../../shared/models/filme.service';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';
import { GeneroService } from '../../../../shared/models/genero.service';
import { CommonModule } from '@angular/common'; // ✅ IMPORTANTE

@Component({
  selector: 'app-criar-filmes',
  standalone: true,
  imports: [
    CommonModule, // ✅ ADICIONADO AQUI
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    WindowBoxComponent,
    MenuComponent
  ],
  templateUrl: './criar-filmes.component.html',
  styleUrls: ['./criar-filmes.component.css']
})
export class CriarFilmesComponent implements OnInit {
  form: FormGroup;
  generos: { id: number; descricao: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private filmeService: FilmeService,
    private generoService: GeneroService,
    private _router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      diretor: ['', Validators.required],
      anoLancamento: ['', Validators.required],
      duracao: ['', Validators.required],
      produtora: ['', Validators.required],
      classificacao: ['', Validators.required],
      poster: ['', Validators.required],
      generosIds: [[], Validators.required],
    });
  }

  ngOnInit() {
    this.generoService.listarTodos().subscribe({
      next: (generos) => {
        console.log('Gêneros recebidos:', generos);
        this.generos = generos;
      },
      error: (err) => console.error('Erro ao buscar gêneros:', err)
    });
  }

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
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        anoLancamento: Number(this.form.value.anoLancamento),
        duracao: Number(this.form.value.duracao),
        generosIds: this.form.value.generosIds.map((id: any) => Number(id)),
      };

      this.filmeService.criar(formData).subscribe({
        next: (res) => {
          console.log('Filme criado com sucesso:', res);
          this._router.navigate(['/lista-filmes']);
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
