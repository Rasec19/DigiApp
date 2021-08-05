import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) {}

  toogleMenu(){
    this.menuCtrl.toggle()
  }
  
  openDigimonList(){
    this.navCtrl.navigateForward(['/digimonlist'])
  }
}
