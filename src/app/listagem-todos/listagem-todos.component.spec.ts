import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemTodosComponent } from './listagem-todos.component';

describe('ListagemTodosComponent', () => {
  let component: ListagemTodosComponent;
  let fixture: ComponentFixture<ListagemTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
