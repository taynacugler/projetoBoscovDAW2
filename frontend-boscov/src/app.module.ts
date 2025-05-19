import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { SharedModule } from './app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FilmeListComponent } from './app/shared/components/filme-list/filme-list.component';
import { AvaliacaoStarsComponent } from './app/shared/components/avaliacao-stars/avaliacao-stars.component';
import { AvaliacaoTextComponent } from './app/shared/components/avaliacao-text/avaliacao-text.component';
import { NovaAvaliacaoComponent } from './app/pages/nova-review/nova-review.component';
import { MenuComponent } from './app/shared/components/menu/menu.component';
import { InputComponent } from './app/shared/components/input/input.component';
import { ButtonComponent } from './app/shared/components/button/button.component';
import { WindowBoxComponent } from './app/shared/window-box/window-box.component';
import { FilmesComponent } from './app/pages/filmes/filmes.component';



@NgModule({
  declarations: [
    AppComponent,
    FilmeListComponent,
    AvaliacaoStarsComponent,
    AvaliacaoTextComponent,
    NovaAvaliacaoComponent, 
    MenuComponent,
    InputComponent,
    ButtonComponent,
    WindowBoxComponent,
    FilmesComponent,
    // declare aqui outros componentes da raiz, se tiver
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // para o HttpClient funcionar
    SharedModule,  
    FormsModule    // se precisar importar seu SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
