import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';
import { LinkListComponent } from './link-list/link-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OverviewComponent,
    FormComponent,
    LinkListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OverviewRoutingModule,
  ]
})
export class OverviewModule { }
