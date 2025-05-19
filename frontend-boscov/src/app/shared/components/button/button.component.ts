import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button [type]="tipo" (click)="onClick($event)">{{ label }}</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Clique aqui';
  @Input() tipo: 'button' | 'submit' | 'reset' = 'button';

  @Output() click = new EventEmitter<Event>();

  onClick(event: Event) {
    this.click.emit(event);
  }
}
