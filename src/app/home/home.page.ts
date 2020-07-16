import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';

//SERVICE
import { MapService } from '../services/map.service';

//MODELS
import { Map } from '../models/map';
import { Value } from '../models/value';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public map = new Map();

  //Values for options
  public layers: Array<Value> = [];
  public shapes: Array<Value> = [];
  public shapeColors: Array<Value> = [];

  public mapURL: any = this.mapService.getMapaUrlRandom();

  constructor(private mapService: MapService) {

    this.loadLayers();
    this.loadShapes();
    this.loadShapeColors();

  }

  loadLayers() {
    this.layers.push(new Value(1, 'MapBox'));
    this.layers.push(new Value(2, 'EduPala'));
    this.layers.push(new Value(3, 'OpenStreet'));
    this.layers.push(new Value(4, 'ArcGis'));
  }

  loadShapes() {
    this.shapes.push(new Value(1, 'Point'));
    this.shapes.push(new Value(2, 'Polyline'));
    this.shapes.push(new Value(3, 'Polygon'));
    this.shapes.push(new Value(4, 'Rectangle'));
    this.shapes.push(new Value(5, 'Circle'));
  }

  loadShapeColors() {
    this.shapeColors.push(new Value(1, 'red'));
    this.shapeColors.push(new Value(2, 'blue'));
    this.shapeColors.push(new Value(3, 'green'));
    this.shapeColors.push(new Value(4, 'yellow'));
    this.shapeColors.push(new Value(5, 'black'));
  }


  onSelectLayer() {
    console.log('this.map.options.layer ', this.map.options.layer);
  }

  testOneValue() {

    this.map.latitude = "-15.795650";
    this.map.longitude = "-47.878197";
    this.map.marker = 'Salão Metropolitano';

    let params = new HttpParams()
      .set("latitude", this.map.latitude)
      .set("longitude", this.map.longitude)
      .set("marker", this.map.marker)
      .set("massive", "")
      .set("coordenatesList", "")
      .set("options", JSON.stringify(this.map.options))

    this.mapURL = this.mapService.getMapaURL(params);

  }

  async testMassiveValues() {

    let coordenates: Array<any> = [];

    coordenates.push({ "latitude": "-15.795650", "longitude": "-47.878197", "marker": 'Museu do canção', "color": 'RED' });
    coordenates.push({ "latitude": "-15.798153", "longitude": "-47.875527", "marker": 'Cat&#201dral Metropolitana', "color": 'GREEN' });
    coordenates.push({ "latitude": "-15.799407", "longitude": "-47.864152", "marker": 'Congresso Nacional', "color": 'BLUE' });
    coordenates.push({ "latitude": "-15.783896", "longitude": "-47.913365", "marker": 'Memorial JK', "color": 'RED' });
    coordenates.push({ "latitude": "-15.799887", "longitude": "-47.907853", "marker": 'Parque da cidade', "color": 'BLUE' });
    coordenates.push({ "latitude": "-15.790241", "longitude": "-47.892789", "marker": 'Torre de TV', "color": 'GREEN' });

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
      .set("token", token)
      .set("options", JSON.stringify(this.map.options))

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
      .set("token", token)
      .set("options", JSON.stringify(this.map.options))

    this.mapURL = this.mapService.getMapaURLMassive(params);
  }

  async testMassiveValuesSpecificMarkets() {

    let coordenates: Array<any> = [];

    coordenates.push({ "latitude": "-15.795650", "longitude": "-47.878197", "marker": 'Museu do canção', "color": 'RED' });
    coordenates.push({ "latitude": "-15.798153", "longitude": "-47.875527", "marker": 'Cat&#201dral Metropolitana', "color": 'GREEN' });
    coordenates.push({ "latitude": "-15.799407", "longitude": "-47.864152", "marker": 'Congresso Nacional', "color": 'BLUE' });
    coordenates.push({ "latitude": "-15.783896", "longitude": "-47.913365", "marker": 'Memorial JK', "color": 'RED' });
    coordenates.push({ "latitude": "-15.799887", "longitude": "-47.907853", "marker": 'Parque da cidade', "color": 'BLUE' });
    coordenates.push({ "latitude": "-15.790241", "longitude": "-47.892789", "marker": 'Torre de TV', "color": 'GREEN' });

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

    this.map.options.showSpecificMarkerts = [0,5];
    
    let params = new HttpParams()
      .set("token", token)
      .set("options", JSON.stringify(this.map.options))

    this.mapURL = this.mapService.getMapaURLMassive(params);
  }

  /**
   * 
   * web to check area: https://www.daftlogic.com/projects-google-maps-area-calculator-tool.htm#
   */

  async testMapArea() {

    let coordenates: Array<any> = [];
    
    coordenates.push({ "latitude": "-15.747309", "longitude": "-47.885165", "marker": 'P4' });
    coordenates.push({ "latitude": "-15.746545", "longitude": "-47.882386", "marker": 'P3'});
    coordenates.push({ "latitude": "-15.740432", "longitude": "-47.884371", "marker": 'P2' });
    coordenates.push({ "latitude": "-15.741279", "longitude": "-47.887107", "marker": 'P1' });

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

    this.map.options.shape = 3; //This is a Polygon shape, because to check it you need more than 2 points
    this.map.options.showArea = true;

    let params = new HttpParams()
      .set("token", token)
      .set("options", JSON.stringify(this.map.options))

    this.mapURL = this.mapService.getMapaURLMassive(params);
  }
}
