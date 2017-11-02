import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { DatosServicesProvider } from "../../providers/datos-services/datos-services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datosList = [];
  constructor(private datosService: DatosServicesProvider, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.getDatos();
  }

  getDatos() {
    this.datosService.getDatos().subscribe(data => this.datosList = data);
  }

  goDetalles(datos): void {
    console.log(datos)
    this.navCtrl.push('detalles', { param: datos });
  }

  eliminarDatos(id): void {
    console.log("Elimiando datos " + id)
    let confirm = this.alertCtrl.create({
      title: 'Seguro de eliminar este dato?',
      message: 'Estas seguro de eliminar este dato de manera permanente?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('click en cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('click en aceptar');
            this.datosService.deleteDatos(id).subscribe(
              data => {
                console.log(data)
                console.log("Estatus: " + data.status)
                this.datosService.getDatos().subscribe(data => this.datosList = data);
              }
            )
          }
        }
      ]
    });
    confirm.present();
  }

}
