import { Component } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

//SERVICE
import { MapService } from '../services/map.service';

//MODELS
import { Mapa } from '../models/map'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public mapa = new Mapa();
  public mapas: Array<Mapa> = [];

  public mapURL: any = this.mapService.getMapaUrlRandom();

  constructor(private mapService: MapService,
    private http: HttpClient,) {}

  testOneValue() {

    this.mapa.latitude = "-15.795650";
    this.mapa.longitude = "-47.878197";
    // this.mapa.marker = '<p style="color:green;"><b>Salão Metropolitano</b></p>';
    this.mapa.marker = 'Salão Metropolitano';

    //set options
    // this.mapa.options

    let params = new HttpParams()
    .set("latitude", this.mapa.latitude)
    .set("longitude", this.mapa.longitude)
    .set("marker", this.mapa.marker)
    .set("massive", "")
    .set("coordenatesList", "")
    .set("options", JSON.stringify(this.mapa.options) )

    this.mapURL = this.mapService.getMapaURL(params);

  }

  async testMassiveValues() {

    let coordenates: Array<any> = [];

    coordenates.push({ "latitude": "-15.795650", "longitude": "-47.878197", "marker": 'Museu do canção', "color": 'RED' });
    coordenates.push({ "latitude": "-15.798153", "longitude": "-47.875527", "marker": 'Cat&#201dral Metropolitana', "color": 'GREEN' });
    coordenates.push({ "latitude": "-15.799407", "longitude": "-47.864152", "marker": 'Congresso Nacional', "color": 'BLUE' });

    let token = await this.mapService.getToken();

    

    for (let index = 0; index < coordenates.length; index++) {

      let params = {
        'token': token,
        'latitude': coordenates[index].latitude,
        'longitude': coordenates[index].longitude,
         'marker': coordenates[index].marker,
        // 'marker': btoa(coordenates[index].marker),
        'color': coordenates[index].color,

      }
      await this.mapService.setCoordenates(params);
    }

    let params = new HttpParams()
    .set("token", token)

    this.mapURL = this.mapService.getMapaURLMassive(params);
  }

  async testCustomMarkert() {
    let coordenates: Array<any> = [];

    coordenates.push({ "latitude": "-15.795650", "longitude": "-47.878197", "marker": '<p style="color:red;"><b>Museu Nacional</b></p>', "color": 'RED' });
    coordenates.push({ "latitude": "-15.798153", "longitude": "-47.875527", "marker": '<p style="color:green;"><b>Salão Metropolitano</b></p>', "color": 'GREEN' });
    coordenates.push({ "latitude": "-15.799407", "longitude": "-47.864152", "marker": '<p style="color:blue;"><b>Congresso Nacional</b></p>', "color": 'BLUE' });


    let token = await this.mapService.getToken();

    for (let index = 0; index < coordenates.length; index++) {

      let params = {
        'token': token,
        'latitude': coordenates[index].latitude,
        'longitude': coordenates[index].longitude,
        'marker': coordenates[index].marker,
        'color': coordenates[index].color,

      }
      await this.mapService.setCoordenates(params);
    }

    let params = new HttpParams()
    .set("token", token);

    this.mapURL = this.mapService.getMapaURLMassive(params);
  }

}
