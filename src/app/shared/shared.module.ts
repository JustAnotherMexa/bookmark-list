import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LinkCardComponent } from './link-card/link-card.component';



@NgModule({
  declarations: [
    CardComponent,
    LinkCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ]
})
export class SharedModule { }
