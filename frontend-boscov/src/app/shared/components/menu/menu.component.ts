import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 constructor(private router: Router, private auth: AuthService) {}

  navegarParaPerfil() {
    this.router.navigate(['/perfil']);
  }

  navegarParaNovaReview() {
    this.router.navigate(['/nova-review']);
  }

  navegarParaFilmes() {
    this.router.navigate(['/filmes']);
  }


  sair() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
