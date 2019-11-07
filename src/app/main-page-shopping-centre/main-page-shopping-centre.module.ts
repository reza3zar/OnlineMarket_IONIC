import { DragScrollModule } from 'ngx-drag-scroll';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPageShoppingCentrePage } from './main-page-shopping-centre.page';
import { CarouselModule } from 'ngx-carousels';
import { FlickityModule } from 'ngx-flickity';
const routes: Routes = [
  {
    path: '',
    component: MainPageShoppingCentrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarouselModule,
    DragScrollModule, 
    FlickityModule,
    RouterModule.forChild(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  declarations: [MainPageShoppingCentrePage]
})
export class MainPageShoppingCentrePageModule {}
