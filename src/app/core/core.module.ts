import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [
    LayoutComponent
  ],
})
export class CoreModule { }
