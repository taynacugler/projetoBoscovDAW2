import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { WindowBoxComponent } from '../../shared/window-box/window-box.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroments/enviroment';
import { AuthService } from '../../../services/auth.service';
import { AvaliacaoStarsComponent } from '../../shared/components/avaliacao-stars/avaliacao-stars.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [MenuComponent, CommonModule, WindowBoxComponent, AvaliacaoStarsComponent],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  avaliacoes: any[] = [];
  private baseUrl = environment.baseUrl;

  constructor(private authService: AuthService, private http: HttpClient) {}

ngOnInit() {
  console.log('Iniciando ngOnInit do PerfilComponent...');
  
  const user = this.authService.getUser();
  console.log('Usuário recuperado do AuthService:', user);

  if (user && user.id) {
    const idUsuario = user.id;
    const url = `http://localhost:3000/usuario/${idUsuario}/avaliacoes`;
    console.log(`Buscando avaliações na URL: ${url}`);

    this.http.get<any[]>(url).subscribe({
      next: (res) => {
        console.log('Avaliações recebidas da API:', res);
        this.avaliacoes = res;
      },
      error: (err) => {
        console.error('Erro ao buscar avaliações:', err);
      }
    });
  } else {
    console.warn('Usuário não encontrado ou não logado');
  }
}

}
