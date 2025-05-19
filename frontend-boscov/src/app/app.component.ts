import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { InputComponent } from './shared/components/input/input.component';
import { WindowBoxComponent } from './shared/window-box/window-box.component';
import { AvaliacaoStarsComponent } from './shared/components/avaliacao-stars/avaliacao-stars.component';
import { AvaliacaoTextComponent } from './shared/components/avaliacao-text/avaliacao-text.component';
import { FilmeListComponent } from './shared/components/filme-list/filme-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, ButtonComponent, InputComponent, WindowBoxComponent, AvaliacaoStarsComponent, AvaliacaoTextComponent, FilmeListComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
