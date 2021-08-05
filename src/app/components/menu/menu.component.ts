import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private menuCtrl: MenuController, private navCtrl: NavController) { }

  ngOnInit() {}

  openDigimonList(){
    this.navCtrl.navigateForward(['/digimonlist'])
    this.menuCtrl.close()
  }

  openProfile(){
    this.navCtrl.navigateForward(['/profile'])
    this.menuCtrl.close()
  }

  salir(){
    this.navCtrl.navigateForward(['/login'])
    this.menuCtrl.close()
  }

  closeMenu(){
    this.menuCtrl.close()
  }
}
