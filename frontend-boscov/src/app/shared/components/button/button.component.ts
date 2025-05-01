import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'; // IMPORTAR AQUI

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule], // IMPORTAR AQUI TAMBÉM
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Clique aqui';
  @Input() rota: string = '';
}
