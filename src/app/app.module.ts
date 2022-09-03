import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/layout/layout.component';

@NgModule({

  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent],
  declarations: [
  ]

})
export class AppModule { }
