import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Product } from 'src/Models/product';
declare let $:any
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss'],
})
export class ProductCategoryPage implements OnInit, AfterViewInit {

  
  ngAfterViewInit(){

         setTimeout(() => {
           $('.main-carousel').flickity({
             // options
             cellAlign: 'left',
             wrapAround: true,
             draggable: false,
             groupCells: 3,
             freeScroll: true,
             pageDots: false
           });
           
         }, 3000);
 
     }

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }
  catID=0;

  productCollection:Array<Product>=new Array<Product>();
  productCollection2:Array<Product>=new Array<Product>();

  ngOnInit() {
    this.catID =Number(this.activatedRoute.snapshot.paramMap.get('catId'));
    this.http.get<Product[]>('http://www.mocky.io/v2/5d3d5a1e320000b738afd096').subscribe(result=>{
      this.productCollection=result;
    })


    this.http.get<Product[]>('http://www.mocky.io/v2/5d3d59393200008b55afd094').subscribe(result=>{
      this.productCollection2=result;
    })

  } 


}
