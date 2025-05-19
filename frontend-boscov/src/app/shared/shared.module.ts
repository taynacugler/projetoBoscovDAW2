import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    InputComponent,
    ButtonComponent,
    MenuComponent,
    HttpClientModule,
    HttpClient
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedModule {}