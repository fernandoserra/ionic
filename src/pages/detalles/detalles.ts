import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DatosServicesProvider } from "../../providers/datos-services/datos-services";
/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'detalles', segment: 'detalles/:param' })
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
  datos = [];
  constructor(private datosService: DatosServicesProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.datos = navParams.get('param');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

  modificarDatos(datos): void {
    console.log('Modificando datos')
    console.log(datos)
    this.datosService.putDatos(datos.id_datos, datos).subscribe(data => {
      console.log(data)
      let alert = this.alertCtrl.create({
        title: 'Actualizacion',
        subTitle: 'Se actualizaron los datos',
        buttons: ['Aceptar']
      });
      alert.present();
    }
    )
  }

  irPrincipal(): void {
    console.log("Ir a principal")
    this.navCtrl.pop();
  }

}
