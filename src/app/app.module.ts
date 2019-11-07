import { HttpModule } from '@angular/http';
import { SystemNotifactionsPage } from './system-notifactions/system-notifactions.page';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { IonRefreshNativeModule } from 'ion-refresh-native';


@NgModule({
  declarations: [AppComponent,SystemNotifactionsPage],
  entryComponents: [SystemNotifactionsPage],

  
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    IonRefreshNativeModule, 
    HttpModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
