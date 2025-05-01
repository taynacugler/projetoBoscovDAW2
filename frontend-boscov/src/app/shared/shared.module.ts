import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent // standalone, então vai no imports
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedModule {}