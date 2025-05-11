import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
