import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  listagemTodosUrl = 'http://jsonplaceholder.typicode.com/todos';
  listagemPostsUrl = 'http://jsonplaceholder.typicode.com/posts';
  listagemAlbumsUrl = 'http://jsonplaceholder.typicode.com/albums';


  constructor(private http: HttpClient) { }

  listarTodos() {
    return this.http.get<any[]>(`${this.listagemTodosUrl}`);
  }

  listarPostagens() {
    return this.http.get<any[]>(`${this.listagemPostsUrl}`);
  }

  listarAlbums() {
    return this.http.get<any[]>(`${this.listagemAlbumsUrl}`);
  }
}
