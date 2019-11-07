import { ToastController } from '@ionic/angular';
import { LoginInfo } from './../../Models/loginInfo';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private storage: Storage,private router:Router,
              private toastController:ToastController
    ) {



 
   }

   ionViewDidEnter(){
    console.log('ionViewDidLoad')

  }

  ngOnInit() {
    this.logininformation=new LoginInfo();
 
    try {
      this.getData("loginInfo").then(val=>{
            this.logininformation=val!=null?val:new LoginInfo();
            if(this.logininformation!=null && this.logininformation.userName!=null && this.logininformation.userName.length>0)  
            this.usernamehasValue=true;
            if(this.logininformation!=null && this.logininformation.password!=null && this.logininformation.password.length>0)
            this.PasswordValue=true;
        }) ;
   
  
      } catch (error) {
        console.log(error)
      } 



  }

  public logininformation:LoginInfo;

  isSignIn:boolean;
  isSingUp:boolean;
 

signToSystem(isSignINStatus) {


    this.isSignIn=isSignINStatus;
    this.isSingUp=!isSignINStatus;
 
  }

  loginToSystem():void{
 


    if(this.logininformation.rememberMe){
      this.setData("loginInfo",this.logininformation)  ;
    }
    else{
      this.setData("loginInfo",new LoginInfo())  ;
    }

      if(this.logininformation.userName.toLowerCase()=='admin' && this.logininformation.password.toLowerCase()=='admin')
      {
        this.router.navigate(['/shoppinCentre']);
      }
      else{
        this.presentToastWithOptions();
      }
  }

  usernamehasValue:boolean;
  keyPressUserName(event: any){
if(this.logininformation.userName.length>0)
    this.usernamehasValue=true;
    else
    {
      this.usernamehasValue=false;
    }

  }

  PasswordValue:boolean;
  keyPressPassword(event: any){
    if(this.logininformation.password.length>0)
        this.PasswordValue=true;
      else
      {
        this.PasswordValue=false;
      }

  }
  async setData(key, value) {
    const res = await this.storage.set(key, value);
  }

  async getData(key) {
  return (  await this.storage.get(key));
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'هشدار',
      message:'اطلاعات وارد شده صحیح نمی باشد!',
      position: 'bottom',
      color: 'danger',
      duration: 3000,
    });
    toast.present();
  }

}
