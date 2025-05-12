import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-window-box',
  templateUrl: './window-box.component.html',
  styleUrls: ['./window-box.component.css'],
  standalone: true
})
export class WindowBoxComponent {
  @Input() title = 'Janela';
}