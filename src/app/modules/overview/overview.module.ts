import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';
import { LinkListComponent } from './link-list/link-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LinkCardComponent } from './link-card/link-card.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    OverviewComponent,
    FormComponent,
    LinkListComponent,
    LinkCardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    OverviewRoutingModule,
  ]
})
export class OverviewModule { }
