import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ErrorComponent],
  exports:[ErrorComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ErrorModule { }
