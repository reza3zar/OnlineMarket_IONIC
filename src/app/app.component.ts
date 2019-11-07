import { Router } from '@angular/router';
import { Component, ViewChildren, QueryList, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Platform, IonRouterOutlet, MenuController, ActionSheetController, PopoverController, ModalController, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit  {
  backButtonSubscription; 
  ngOnInit() { }

  pageIsloaded=false;
   ngAfterViewInit() {
    // this.backButtonSubscription = this.platform.backButton.subscribe(() => {
    //   navigator['app'].exitApp();
    // });
    this.pageIsloaded=true;
    this.cdr.detectChanges();
  }
  ngOnDestroy() { 
    this.backButtonSubscription.unsubscribe();
  }

  public appPages = [
    {
      title: 'خانه',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'گزارشات روز',
      url: '/page-not-found',
      icon: 'pie'
    },
    {
      title: 'نبض بازار',
      url: '/page-not-found',
      icon: 'pulse'
    },
    {
      title: 'فروشگاه', 
      url: '/shoppinCentre',
      icon: 'basket'
    },
    {
      title: 'دارایی',
      url: '/products',
      icon: 'cash'
    },
    {
      title: 'تنظیمات',
      url: '/list',
      icon: 'settings'
    }
  ];
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private router:Router,
    private cdr: ChangeDetectorRef
  ) {
 
    
    this.initializeApp();
    this.presentToastWithOptions();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 

async  exitApp(){
  const alert = await this.alertController.create({
    header: 'خروج از سیستم!',
    message: 'آیا از برنامه خارج می شوید؟',
    buttons: [
      {
        text: 'خیر',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
           
        }
      }, {
        text: 'بله',
        handler: () => {
          this.router.navigate(['/login']);
          navigator['app'].exitApp();
        }
      }
    ]
  });

  await alert.present();
}

async presentToastWithOptions() {
  // const toast = await this.toastController.create({
  //   header: 'هشدار',
  //   message:'از برنامه خارج می شوید',
  //   position: 'bottom',
  //   buttons: [
  //     {
  //       side: 'start',
  //       icon: 'star',
  //       text: 'بلی',
  //       handler: () => {
  //         console.log('Favorite clicked');
  //       }
  //     }, {
  //       text: 'خیر',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }
  //   ]
  // });
  // toast.present();
}


} 
