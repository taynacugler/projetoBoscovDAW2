import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WindowBoxComponent } from './window-box/window-box.component';
import { AvaliacaoStarsComponent } from './components/avaliacao-stars/avaliacao-stars.component';
import { AvaliacaoTextComponent } from './components/avaliacao-text/avaliacao-text.component';
import { FilmeListComponent } from './components/filme-list/filme-list.component';


@NgModule({
  declarations: [FilmeListComponent,
    AvaliacaoStarsComponent,
    AvaliacaoTextComponent,
    MenuComponent,],
  imports: [
    CommonModule,
    RouterModule,
    InputComponent,
    ButtonComponent,
    MenuComponent,
    WindowBoxComponent,
    AvaliacaoStarsComponent,
    AvaliacaoTextComponent,
    FilmeListComponent,
    HttpClientModule,
    HttpClient
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    ButtonComponent,
    MenuComponent,
    WindowBoxComponent,
    AvaliacaoStarsComponent,
    AvaliacaoTextComponent,
    FilmeListComponent,
  ]
})
export class SharedModule {}