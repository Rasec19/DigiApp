import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user = [
    {
      nombre:'Pepe',
      apellido:'Perez',
      telefono:'(662)-253-64-03',
      fecha:'20/09/05'
    }
  ]

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alertEditar(){
    const alert = await this.alertCtrl.create({
      cssClass:'my-alert',
      header:'Editar datos',
      message:'¿Seguro que desea editar sus datos?',
      buttons:[
        {
          text:'Si',
          handler: () => {
            console.log("Se han editado los datos")
          }
        },
        {
          text:'No',
          handler: () => {
            console.log("No se han editado los datos")
          }
        }
      ]
    })
    await alert.present()
  }

  async alertEliminar(){
    const alert = await this.alertCtrl.create({
      cssClass:'my-alert',
      header:'Eliminar perfil',
      message:'¿Seguro que desea eliminar este perfil?',
      buttons:[
        {
          text:'Si',
          handler: () => {
            console.log("Se han borrado los datos")
          }
        },
        {
          text:'No',
          handler: () => {
            console.log("No se han borrado los datos")
          }
        }
      ]
    })
    await alert.present()
  }

}
