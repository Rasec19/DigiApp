import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userInput:string;
  passwordInput:string

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  login(){
    if(this.userInput === "admin" && this.passwordInput === "admin"){
      
      this.successLogin()

      this.navCtrl.navigateForward(['home'])
    }
  }

  async successLogin(){
    const toast = await this.toastCtrl.create({
      message:"Success login!",
      duration:2000,
      position:"bottom"
    })
    await toast.present()
  }
}
