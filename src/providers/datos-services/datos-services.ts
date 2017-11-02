import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Observable } from "rxjs/Observable";
/*
  Generated class for the DatosServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosServicesProvider {

  constructor(private http: Http) {
    console.log('Hello DatosServicesProvider Provider');
  }

  getDatos() {
    return this.http.get('http://localhost:1337/datos')
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.catchError)
  }
  putDatos(id, datos) {
    return this.http.put('http://localhost:1337/datos/' + id, datos)
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.catchError)

  }

  deleteDatos(id) {
    return this.http.delete('http://localhost:1337/datos/' + id)
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.catchError)
  }

  private catchError(error: Response | any) {
    console.log(error)
    return Observable.throw(error.json().error || "Serve error.");
  }

  private logResponse(res: Response) {
    console.log(res)
  }

  private extractData(res: Response) {
    return res.json();
  }

}
