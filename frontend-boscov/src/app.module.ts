import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { SharedModule } from './app/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    // declare aqui outros componentes da raiz, se tiver
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // para o HttpClient funcionar
    SharedModule,      // se precisar importar seu SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
