import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  // Método para verificar se já tem token salvo (usuário logado)
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  // Getter para usar o estado de login reativo
  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

 register(dados: any) {
  return this.http.post('http://localhost:3000/auth/register', dados); // ajuste o endpoint conforme seu backend
}


  // Login com salvamento de token e usuário
  login(credentials: { email: string; senha: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user)); // salva os dados do usuário
        this.isLoggedInSubject.next(true);
      })
    );
  }

  // Logout: remove token e user, avisa que saiu
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false);
  }

  // Retorna o token atual
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Retorna o usuário atual (se quiser usar)
  getUser(): any | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}