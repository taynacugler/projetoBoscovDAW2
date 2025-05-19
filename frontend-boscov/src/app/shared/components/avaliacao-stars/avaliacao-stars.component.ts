// avaliacao-stars.component.ts
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
  @Output() notaChange = new EventEmitter<number>();

  estrelas = [1, 2, 3, 4, 5];

  setNota(n: number) {
    this.nota = n;
    this.notaChange.emit(this.nota);
  }
}
