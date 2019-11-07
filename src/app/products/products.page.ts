import { ToastController } from '@ionic/angular';
import { Product } from './../../Models/product';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private http: HttpClient, private toastController:ToastController
    ,private activatedRoute: ActivatedRoute) { }
  public isLoadedData=false;
  public itemsFakes=[1,2,3,4,5,6,7,8]

  public catID:number=0;
  ngOnInit() {
    this.pageNumber=1;
    this.catID =Number(this.activatedRoute.snapshot.paramMap.get('catId'));

    this.getTopProductsByCategoryId(this.catID);

  }
  productCollection=new Array<Product>();

pageNumber:number=-1;
public getTopProductsMeat(): Observable<Product[]>{
  try {
    switch (this.pageNumber) {
      case 1:
        return this.http.get<Product[]>('http://www.mocky.io/v2/5d3d5a1e320000b738afd096');
      case 2:
        return this.http.get<Product[]>('http://www.mocky.io/v2/5d3d59393200008b55afd094') ;

      default:
        return of(this.productCollection) ;
    }
  } catch (error) {
      console.log(error)
  }
}


public getTopProductsFruit(): Observable<Product[]>{
  try {
    switch (this.pageNumber) {
      case 1:
        return this.http.get<Product[]>('http://www.mocky.io/v2/5d3d40bc320000643eafd080');
      case 2:
        return this.http.get<Product[]>('http://www.mocky.io/v2/5d3d41de320000b83cafd082') ;

      default:
          return of(this.productCollection) ;
    }
  } catch (error) {
      console.log(error)
  }
}

 


  getTopProductsByCategoryId(catID:number): Observable<Product[]>{

    switch (catID) {
      case 1:
              this.getTopProductsMeat().subscribe(result=>{
                this.setDataToCollection(result);
               },
          err =>{
                 this.errorConnectTOApi()
                 this.isLoadedData=true;});
         break;
      case 2:
               this.getTopProductsFruit().subscribe(result=>{
               this.setDataToCollection(result);
              },
         err =>{
                this.errorConnectTOApi()
                this.isLoadedData=true;});
        break;
      default:
          return of(this.productCollection) ;
    }
  }


  public setDataToCollection(result : any){
    this.productCollection= this.productCollection.concat(result);
    this.isLoadedData=true;
  } 



doRefresh(event,state:boolean) {
  try {
  

    if(state==true){
      this.pageNumber=1;
      this.productCollection=new Array<Product>();
      event.target.disabled=false;

    }
    else{
      this.pageNumber++;
      console.log('state==false')
    }
    console.log('this.pageNumber')

 console.log(this.pageNumber)
 


    this.getTopProductsByCategoryId(this.catID).subscribe(result=>{
      this.setDataToCollection(result)
      this.isLoadedData=true;
      event.target.complete();
    },
    err =>{
      this.errorConnectTOApi()
      this.isLoadedData=true;

      event.target.complete();
    } ,)
   
  } catch (error) {
    console.log(error)
   this.warningsNoMoreData();
  event.target.complete();
  event.target.disabled = true;

  }
 
}


 


async errorConnectTOApi() {
  const toast = await this.toastController.create({
    header: 'هشدار',
    message:'خطا در اتصال به سرویس، لطفا از دسترسی به اینترنت خود مطمئن شوید!',
    position: 'bottom',
    color: 'danger',
    duration: 3000,
  });
  toast.present();
}


async warningsNoMoreData() {
  const toast = await this.toastController.create({
    header: 'هشدار',
    message:'کالای بیشتری یافت نشد!',
    position: 'bottom',
    color: 'warning',
    duration: 3000,
  });
  toast.present();
}

}
