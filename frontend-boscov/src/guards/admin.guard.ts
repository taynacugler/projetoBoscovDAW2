import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userData = localStorage.getItem('usuario');
    if (userData) {
      const user = JSON.parse(userData);
      if (user.tipo === 'admin') {
        return true; 
      }
    }

    alert('Acesso negado. Apenas administradores podem acessar esta página.');
    this.router.navigate(['/']);
    return false;
  }
}
