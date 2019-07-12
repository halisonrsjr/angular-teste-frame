import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemTodosComponent } from './listagem-todos/listagem-todos.component';
import { ListagemService } from './listagem.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';






@NgModule({
  declarations: [
    AppComponent,
    ListagemTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [ListagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
