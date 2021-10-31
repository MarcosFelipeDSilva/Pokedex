import { SharedModule } from './../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { RoutingModule } from './routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,

  ]
})
export class PagesModule { }
