import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  productIsSelected:boolean;

  addToBasket(){
    this.productIsSelected=true;
  }
  removeFromBasket(){
    this.productIsSelected=false;
  }
}
