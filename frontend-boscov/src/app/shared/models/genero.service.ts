import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Genero {
  id: number;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private baseUrl = 'http://localhost:3000/generos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.baseUrl);
  }

  buscarPorId(id: number): Observable<Genero> {
    return this.http.get<Genero>(`${this.baseUrl}/${id}`);
  }

  criar(genero: Omit<Genero, 'id'>): Observable<Genero> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<Genero>(this.baseUrl, genero, { headers });
  }

}
