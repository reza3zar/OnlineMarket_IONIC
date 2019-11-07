import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder, HttpTransportType} from '@aspnet/signalr';
import { PopoverController, ToastController } from '@ionic/angular';
import { SystemNotifactionsPage } from '../system-notifactions/system-notifactions.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private hubConnection: HubConnection;
  bitCoinValue:number=0;
  oldBitCoinValue:number=-1;
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';

  ionViewDidLoad() {
 console.log('view Is Loaded')
  }
  constructor(private popoverCtrl:PopoverController,private toastController:ToastController ) {}

  ngOnInit(){

    try {
      let builder = new HubConnectionBuilder();
      this.hubConnection = builder.withUrl('http://172.16.2.89:18001/chat',{skipNegotiation: true,transport:  HttpTransportType.WebSockets}).build();  // see startup.cs

          this.hubConnection.on('sendToClient', (randValue: number) => {
            if(randValue!==this.bitCoinValue){
              this.oldBitCoinValue=this.bitCoinValue;
              this.bitCoinValue=randValue;
            }
            // var displayDate = new Date().toLocaleDateString();
          });
      this.hubConnection.start().catch(errorVal=>{
        this.connectionErrorOccured();

      });
    } catch (error) {
    console.log('reza')
    }

  }

  async connectionErrorOccured() {
    console.log('reza')
    const toast = await this.toastController.create({
      header: 'هشدار',
      message:'اتصال به سرور با خطا روبرو شد!',
      position: 'top',
      color: 'danger',
      duration: 4000,
    });
    toast.present();
  }

  async showNotifications(){
    const popover = await this.popoverCtrl.create({
      component: SystemNotifactionsPage,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


}
