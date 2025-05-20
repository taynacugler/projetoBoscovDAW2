import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avaliacao-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avaliacao-stars.component.html',
  styleUrls: ['./avaliacao-stars.component.css']
})
export class AvaliacaoStarsComponent {
  @Input() nota: number = 0; // nota atual
  @Input() readonly: boolean = false; // controla se é somente leitura ou editável
  @Output() notaChange = new EventEmitter<number>();

  estrelas = [1, 2, 3, 4, 5];

  setNota(n: number) {
    if (!this.readonly) { // só altera se não for readonly
      this.nota = n;
      this.notaChange.emit(this.nota);
    }
  }
}
