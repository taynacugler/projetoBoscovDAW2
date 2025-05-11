import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    InputComponent, // standalone, então vai no imports
    InputComponent // standalone, então vai no imports
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedModule {}