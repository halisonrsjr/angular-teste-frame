import { ListagemService } from './../listagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-todos',
  templateUrl: './listagem-todos.component.html',
  styleUrls: ['./listagem-todos.component.css']
})
export class ListagemTodosComponent implements OnInit {

  listagem : Array<any>;
  postagem : Array<any>;
  albums : Array<any>;

  constructor(private listagemService: ListagemService) { }

  ngOnInit() {
    this.listarTodos();
    this.listarPostagens();
    this.listarAlbums();

  }

  listarTodos(){
    this.listagemService.listarTodos().subscribe(dados => this.listagem = dados);
  }

  listarPostagens(){
    this.listagemService.listarPostagens().subscribe(dados => this.postagem = dados);
  }

  listarAlbums(){
    this.listagemService.listarAlbums().subscribe(dados => this.albums = dados);
  }
}
