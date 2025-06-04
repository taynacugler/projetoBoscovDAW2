import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NovaAvaliacaoComponent } from './pages/nova-review/nova-review.component';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { AuthGuard } from '../auth.guard';
import { CriarFilmesComponent } from './pages/criarFilmes/pages/criar-filmes/criar-filmes.component';
import { AdminGuard } from '../admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },

  { path: 'nova-review', component: NovaAvaliacaoComponent, canActivate: [AuthGuard] },

  { path: 'filmes', component: FilmesComponent, canActivate: [AuthGuard]}, 

  { path: 'criar-filmes', component: CriarFilmesComponent, canActivate: [AdminGuard] }, 

  { path: 'login', component: LoginComponent },

  { path: 'cadastro', component: CadastroComponent },
];
