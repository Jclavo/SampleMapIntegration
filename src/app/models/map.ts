export class Mapa {
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
    hideMarkets: boolean = false;
    showSpecificMarkerts: Array<any> = [];
}