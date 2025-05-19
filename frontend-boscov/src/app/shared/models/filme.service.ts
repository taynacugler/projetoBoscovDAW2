// filme.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from './filme.model'; // ajuste o caminho conforme necessário
@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private baseUrl = 'http://localhost:3000/filmes'; // ajuste sua URL

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.baseUrl);
  }
}
