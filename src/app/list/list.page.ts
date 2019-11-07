import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import Swiper from 'swiper';

declare let $: any;
// import { DragScrollComponent } from 'ngx-drag-scroll';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit   {
  name = 'Angular with Swiper';
  mySwiper: Swiper;
  slides = [
    'https://via.placeholder.com/300x200/FF5733/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff'
  ];
 

  // @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;


  // moveLeft() {
  //   this.ds.moveLeft();
  // }

  // moveRight() {
  //   this.ds.moveRight();
  // }

  // moveTo(index) {
  //   this.ds.moveTo(index);
  // }
 
 
  constructor(private storage: Storage) {
 
  }

 
  ngOnInit() {
     
  }

  userName='';
  saveUserstorege(){
    this.setData('userName', this.userName);
    console.log(this.userName);

  }
  loadDataUserstorege(){
    this.getData('userName');
  }

  async setData(key, value) {
    const res = await this.storage.set(key, value);
    console.log(res);
  }

  async getData(key) {
    this.userName = await this.storage.get(key);
  }
 
     
 
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
