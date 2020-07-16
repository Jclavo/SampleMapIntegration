export class Map {
    latitude: string;
    longitude: string;
    marker: string;
    color: string;
    
    massive: string = ""; 
    coordenatesList: string = "";
    
    token: string;
    options = new Option();
}

class Option{
    layer: number = 1
    shape: number = 1
    shapeColor: string = 'red'
    hideMarkets: boolean = false;
    showSpecificMarkerts: Array<any> = [];
    showArea: boolean = false;
    // showSpecificMarkerts: Array<any> = [0,5];
}