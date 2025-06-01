import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from './filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private baseUrl = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.baseUrl);
  }

 criar(filme: Omit<Filme, 'id'>): Observable<Filme> {
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.post<Filme>(this.baseUrl, filme, { headers });
}
}
