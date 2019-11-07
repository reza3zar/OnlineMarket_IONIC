import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;



@Component({
  selector: 'app-main-page-shopping-centre',
  templateUrl: './main-page-shopping-centre.page.html',
  styleUrls: ['./main-page-shopping-centre.page.scss'],
})
export class MainPageShoppingCentrePage implements OnInit, AfterViewInit {

  
   ngAfterViewInit(){
 
          setTimeout(() => {
            $('.main-carousel').flickity({
              // options
              cellAlign: 'left',
              wrapAround: true,
              draggable: false,
              autoPlay: 4500 ,
              pauseAutoPlayOnHover: false,
              freeScroll: true,
            });
            
          }, 1000);
  
      }
   
  constructor(private router:Router) {
   }

  ngOnInit() { 
  } 
 

  navigateToCategoryDetails(catId:number){
    this.router.navigate(['/product-category/',catId]);
  }
 

 
}
