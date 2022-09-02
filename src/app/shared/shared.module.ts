import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from './link-card/link-card.component';



@NgModule({
  declarations: [
    LinkCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    LinkCardComponent
  ]
})
export class SharedModule { }
