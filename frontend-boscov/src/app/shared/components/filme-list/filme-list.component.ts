// filme-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
interface Filme {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-filme-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnChanges {
  @Input() filmes: Filme[] = [];
  @Output() filmeSelecionado = new EventEmitter<Filme>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filmes']) {
      console.log('Filmes atualizados no componente filho:', this.filmes);
    }
  }
  onChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const id = selectElement.value;
  this.selecionarFilmePorId(id);
}


   selecionarFilmePorId(id: string) {
    const filme = this.filmes.find(f => f.id === +id);
    if (filme) {
      this.filmeSelecionado.emit(filme);
    }
  }
}