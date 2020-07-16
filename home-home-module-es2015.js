(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Integrate Map Sample\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrolling=\"no\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Integrate Map Sample</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-row text-center>\n    <ion-col col-6>\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"testOneValue()\">1 Markert</ion-button>\n    </ion-col>\n    <ion-col col-6>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"testMassiveValues()\">Many Markets</ion-button>\n    </ion-col>\n    <ion-col col-6>\n      <ion-button expand=\"full\" color=\"success\" (click)=\"testCustomMarkert()\">Custom Markets\n      </ion-button>\n    </ion-col>\n    <ion-col col-6>\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"testMassiveValuesSpecificMarkets()\">Shape with specific Markets</ion-button>\n    </ion-col>\n    <ion-col col-6>\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"testMapArea()\">Get Area for points</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row text-center>\n    <ion-col col-3>\n      <ion-item>\n        <ion-label>Layer</ion-label>\n        <ion-select [(ngModel)]=\"map.options.layer\" interface=\"popover\" name=\"layer\" placeholder=\"Select a layer\"\n          (ionChange)=\"onSelectLayer()\">\n          <ion-select-option *ngFor=\"let layer of layers\" value=\"{{layer.id}}\">\n            {{layer.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-3>\n      <ion-item>\n        <ion-label>Shape</ion-label>\n        <ion-select [(ngModel)]=\"map.options.shape\" interface=\"popover\" name=\"shape\" placeholder=\"Select a shape\">\n          <ion-select-option *ngFor=\"let shape of shapes\" value=\"{{shape.id}}\">\n            {{shape.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-3>\n      <ion-item>\n        <ion-label>Shape Color</ion-label>\n        <ion-select [(ngModel)]=\"map.options.shapeColor\" interface=\"popover\" name=\"shapeColor\"\n          placeholder=\"Select a color for the shape\">\n          <ion-select-option *ngFor=\"let shapeColor of shapeColors\" value=\"{{shapeColor.name}}\">\n            {{shapeColor.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-3>\n      <ion-item>\n        <ion-label>Hide markerts</ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"map.options.hideMarkets\"></ion-checkbox>\n      </ion-item>\n    </ion-col>\n\n  </ion-row>\n\n  <iframe [src]=\"mapURL\" width=\"100%\" height=\"100%\" scrolling=\"no\" frameborder=\"0\"></iframe>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pjbGF2by9pb25pYy13b3Jrc3BhY2UvU2FtcGxlTWFwSW50ZWdyYXRpb24vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _models_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/map */ "./src/app/models/map.ts");
/* harmony import */ var _models_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/value */ "./src/app/models/value.ts");



//SERVICE

//MODELS


let HomePage = class HomePage {
    constructor(mapService) {
        this.mapService = mapService;
        this.map = new _models_map__WEBPACK_IMPORTED_MODULE_4__["Map"]();
        //Values for options
        this.layers = [];
        this.shapes = [];
        this.shapeColors = [];
        this.mapURL = this.mapService.getMapaUrlRandom();
        this.loadLayers();
        this.loadShapes();
        this.loadShapeColors();
    }
    loadLayers() {
        this.layers.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](1, 'MapBox'));
        this.layers.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](2, 'EduPala'));
        this.layers.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](3, 'OpenStreet'));
        this.layers.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](4, 'ArcGis'));
    }
    loadShapes() {
        this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](1, 'Point'));
        this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](2, 'Polyline'));
        this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](3, 'Polygon'));
        this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](4, 'Rectangle'));
        this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](5, 'Circle'));
    }
    loadShapeColors() {
        this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](1, 'red'));
        this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](2, 'blue'));
        this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](3, 'green'));
        this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](4, 'yellow'));
        this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](5, 'black'));
    }
    onSelectLayer() {
        console.log('this.map.options.layer ', this.map.options.layer);
    }
    testOneValue() {
        this.map.latitude = "-15.795650";
        this.map.longitude = "-47.878197";
        this.map.marker = 'Salão Metropolitano';
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("latitude", this.map.latitude)
            .set("longitude", this.map.longitude)
            .set("marker", this.map.marker)
            .set("massive", "")
            .set("coordenatesList", "")
            .set("options", JSON.stringify(this.map.options));
        this.mapURL = this.mapService.getMapaURL(params);
    }
    testMassiveValues() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let coordenates = [];
            coordenates.push({ "latitude": "-15.795650", "longitude": "-47.878197", "marker": 'Museu do canção', "color": 'RED' });
            coordenates.push({ "latitude": "-15.798153", "longitude": "-47.875527", "marker": 'Cat&#201dral Metropolitana', "color": 'GREEN' });
            coordenates.push({ "latitude": "-15.799407", "longitude": "-47.864152", "marker": 'Congresso Nacional', "color": 'BLUE' });
            coordenates.push({ "latitude": "-15.783896", "longitude": "-47.913365", "marker": 'Memorial JK', "color": 'RED' });
            coordenates.push({ "latitude": "-15.799887", "longitude": "-47.907853", "marker": 'Parque da cidade', "color": 'BLUE' });
            coordenates.push({ "latitude": "-15.790241", "longitude": "-47.892789", "marker": 'Torre de TV', "color": 'GREEN' });
            let token = yield this.mapService.getToken();
            for (let index = 0; index < coordenates.length; index++) {
                let params = {
                    'token': token,
                    'latitude': coordenates[index].latitude,
                    'longitude': coordenates[index].longitude,
                    'marker': coordenates[index].marker,
                    'color': coordenates[index].color,
                };
                yield this.mapService.setCoordenates(params);
            }
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("token", token)
                .set("options", JSON.stringify(this.map.options));
            this.mapURL = this.mapService.getMapaURLMassive(params);
        });
    }
    testCustomMarkert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let coordenates = [];
            coordenates.push({ "latitude": "-15.795650", "longitude": "-47.878197", "marker": '<p style="color:red;"><b>Museu Nacional</b></p>', "color": 'RED' });
            coordenates.push({ "latitude": "-15.798153", "longitude": "-47.875527", "marker": '<p style="color:green;"><b>Salão Metropolitano</b></p>', "color": 'GREEN' });
            coordenates.push({ "latitude": "-15.799407", "longitude": "-47.864152", "marker": '<p style="color:blue;"><b>Congresso Nacional</b></p>', "color": 'BLUE' });
            let token = yield this.mapService.getToken();
            for (let index = 0; index < coordenates.length; index++) {
                let params = {
                    'token': token,
                    'latitude': coordenates[index].latitude,
                    'longitude': coordenates[index].longitude,
                    'marker': coordenates[index].marker,
                    'color': coordenates[index].color,
                };
                yield this.mapService.setCoordenates(params);
            }
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("token", token)
                .set("options", JSON.stringify(this.map.options));
            this.mapURL = this.mapService.getMapaURLMassive(params);
        });
    }
    testMassiveValuesSpecificMarkets() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let coordenates = [];
            coordenates.push({ "latitude": "-15.795650", "longitude": "-47.878197", "marker": 'Museu do canção', "color": 'RED' });
            coordenates.push({ "latitude": "-15.798153", "longitude": "-47.875527", "marker": 'Cat&#201dral Metropolitana', "color": 'GREEN' });
            coordenates.push({ "latitude": "-15.799407", "longitude": "-47.864152", "marker": 'Congresso Nacional', "color": 'BLUE' });
            coordenates.push({ "latitude": "-15.783896", "longitude": "-47.913365", "marker": 'Memorial JK', "color": 'RED' });
            coordenates.push({ "latitude": "-15.799887", "longitude": "-47.907853", "marker": 'Parque da cidade', "color": 'BLUE' });
            coordenates.push({ "latitude": "-15.790241", "longitude": "-47.892789", "marker": 'Torre de TV', "color": 'GREEN' });
            let token = yield this.mapService.getToken();
            for (let index = 0; index < coordenates.length; index++) {
                let params = {
                    'token': token,
                    'latitude': coordenates[index].latitude,
                    'longitude': coordenates[index].longitude,
                    'marker': coordenates[index].marker,
                    'color': coordenates[index].color,
                };
                yield this.mapService.setCoordenates(params);
            }
            this.map.options.showSpecificMarkerts = [0, 5];
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("token", token)
                .set("options", JSON.stringify(this.map.options));
            this.mapURL = this.mapService.getMapaURLMassive(params);
        });
    }
    /**
     *
     * web to check area: https://www.daftlogic.com/projects-google-maps-area-calculator-tool.htm#
     */
    testMapArea() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let coordenates = [];
            coordenates.push({ "latitude": "-15.747309", "longitude": "-47.885165", "marker": 'P4' });
            coordenates.push({ "latitude": "-15.746545", "longitude": "-47.882386", "marker": 'P3' });
            coordenates.push({ "latitude": "-15.740432", "longitude": "-47.884371", "marker": 'P2' });
            coordenates.push({ "latitude": "-15.741279", "longitude": "-47.887107", "marker": 'P1' });
            let token = yield this.mapService.getToken();
            for (let index = 0; index < coordenates.length; index++) {
                let params = {
                    'token': token,
                    'latitude': coordenates[index].latitude,
                    'longitude': coordenates[index].longitude,
                    'marker': coordenates[index].marker,
                    'color': coordenates[index].color,
                };
                yield this.mapService.setCoordenates(params);
            }
            this.map.options.shape = 3; //This is a Polygon shape, because to check it you need more than 2 points
            this.map.options.showArea = true;
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("token", token)
                .set("options", JSON.stringify(this.map.options));
            this.mapURL = this.mapService.getMapaURLMassive(params);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])
], HomePage);



/***/ }),

/***/ "./src/app/models/map.ts":
/*!*******************************!*\
  !*** ./src/app/models/map.ts ***!
  \*******************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Map {
    constructor() {
        this.massive = "";
        this.coordenatesList = "";
        this.options = new Option();
    }
}
class Option {
    constructor() {
        this.layer = 1;
        this.shape = 1;
        this.shapeColor = 'red';
        this.hideMarkets = false;
        this.showSpecificMarkerts = [];
        this.showArea = false;
        // showSpecificMarkerts: Array<any> = [0,5];
    }
}


/***/ }),

/***/ "./src/app/models/value.ts":
/*!*********************************!*\
  !*** ./src/app/models/value.ts ***!
  \*********************************/
/*! exports provided: Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Value {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
}


/***/ }),

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




//SERVICE

let MapService = class MapService {
    constructor(domSanitizer, http) {
        this.domSanitizer = domSanitizer;
        this.http = http;
        this.mapServiceURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mapServiceURL;
        this.mapURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapServiceURL);
    }
    getToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.get(this.mapServiceURL + '/getToken').toPromise().then((response) => {
                if (response.status) {
                    console.info(response.message);
                    return response.result;
                }
                else {
                    console.error('error');
                    return;
                }
            });
        });
    }
    setCoordenates(coordenates) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            coordenates.marker ? coordenates.marker = btoa(coordenates.marker) : "";
            return this.http.post(this.mapServiceURL + '/setCoordenates', coordenates).toPromise().then((response) => {
                if (response.status) {
                    console.info(response.message);
                }
                else {
                    console.error(response.message);
                }
            });
        });
    }
    getMapaURL(params) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapServiceURL + '?' + params);
    }
    getMapaURLMassive(params) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapServiceURL + '/showMassiveMap?' + params);
    }
    getMapaUrlRandom() {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapServiceURL);
    }
};
MapService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], MapService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map