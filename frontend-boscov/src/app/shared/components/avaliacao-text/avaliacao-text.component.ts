import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avaliacao-text',
  imports: [CommonModule],
  templateUrl: './avaliacao-text.component.html',
  styleUrls: ['./avaliacao-text.component.css']
})
export class AvaliacaoTextComponent {
  @Input() comentario: string = '';
  @Output() comentarioChange = new EventEmitter<string>();

  onComentarioChange(value: string) {
    this.comentario = value;
    this.comentarioChange.emit(this.comentario);
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.onComentarioChange(target.value);
  }
}
