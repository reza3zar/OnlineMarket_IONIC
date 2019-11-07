import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
 

import { IonicModule } from '@ionic/angular';

 

@NgModule({
  imports: [
  
    IonicModule,
 
  ],
  exports:[ProductDetailComponent],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule {}
