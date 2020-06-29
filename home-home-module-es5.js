function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Integrate Map Sample\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" scrolling=\"no\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Integrate Map Sample</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-row text-center>\r\n    <ion-col col-6>\r\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"testOneValue()\">1 Markert</ion-button>\r\n    </ion-col>\r\n    <ion-col col-6>\r\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"testMassiveValues()\">Many Markets</ion-button>\r\n    </ion-col>\r\n    <ion-col col-6>\r\n      <ion-button expand=\"full\" color=\"success\" (click)=\"testCustomMarkert()\">Custom Markets\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col col-6>\r\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"testMassiveValuesSpecificMarkets()\">Shape with specific Markets</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row text-center>\r\n    <ion-col col-3>\r\n      <ion-item>\r\n        <ion-label>Layer</ion-label>\r\n        <ion-select [(ngModel)]=\"map.options.layer\" interface=\"popover\" name=\"layer\" placeholder=\"Select a layer\"\r\n          (ionChange)=\"onSelectLayer()\">\r\n          <ion-select-option *ngFor=\"let layer of layers\" value=\"{{layer.id}}\">\r\n            {{layer.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col col-3>\r\n      <ion-item>\r\n        <ion-label>Shape</ion-label>\r\n        <ion-select [(ngModel)]=\"map.options.shape\" interface=\"popover\" name=\"shape\" placeholder=\"Select a shape\">\r\n          <ion-select-option *ngFor=\"let shape of shapes\" value=\"{{shape.id}}\">\r\n            {{shape.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col col-3>\r\n      <ion-item>\r\n        <ion-label>Shape Color</ion-label>\r\n        <ion-select [(ngModel)]=\"map.options.shapeColor\" interface=\"popover\" name=\"shapeColor\"\r\n          placeholder=\"Select a color for the shape\">\r\n          <ion-select-option *ngFor=\"let shapeColor of shapeColors\" value=\"{{shapeColor.name}}\">\r\n            {{shapeColor.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col col-3>\r\n      <ion-item>\r\n        <ion-label>Hide markerts</ion-label>\r\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"map.options.hideMarkets\"></ion-checkbox>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n  <iframe [src]=\"mapURL\" width=\"100%\" height=\"100%\" scrolling=\"no\" frameborder=\"0\"></iframe>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXExldmVsXFxEb2N1bWVudHNcXEFuZ3VsYXJXb3Jrc3BhY2VcXFNhbXBsZU1hcEludGVncmF0aW9uL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbn0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/map.service */
    "./src/app/services/map.service.ts");
    /* harmony import */


    var _models_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/map */
    "./src/app/models/map.ts");
    /* harmony import */


    var _models_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/value */
    "./src/app/models/value.ts"); //SERVICE
    //MODELS


    var HomePage = /*#__PURE__*/function () {
      function HomePage(mapService) {
        _classCallCheck(this, HomePage);

        this.mapService = mapService;
        this.map = new _models_map__WEBPACK_IMPORTED_MODULE_4__["Map"](); //Values for options

        this.layers = [];
        this.shapes = [];
        this.shapeColors = [];
        this.mapURL = this.mapService.getMapaUrlRandom();
        this.loadLayers();
        this.loadShapes();
        this.loadShapeColors();
      }

      _createClass(HomePage, [{
        key: "loadLayers",
        value: function loadLayers() {
          this.layers.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](1, 'MapBox'));
          this.layers.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](2, 'EduPala'));
          this.layers.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](3, 'OpenStreet'));
          this.layers.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](4, 'ArcGis'));
        }
      }, {
        key: "loadShapes",
        value: function loadShapes() {
          this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](1, 'Point'));
          this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](2, 'Polyline'));
          this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](3, 'Polygon'));
          this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](4, 'Rectangle'));
          this.shapes.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](5, 'Circle'));
        }
      }, {
        key: "loadShapeColors",
        value: function loadShapeColors() {
          this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](1, 'red'));
          this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](2, 'blue'));
          this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](3, 'green'));
          this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](4, 'yellow'));
          this.shapeColors.push(new _models_value__WEBPACK_IMPORTED_MODULE_5__["Value"](5, 'black'));
        }
      }, {
        key: "onSelectLayer",
        value: function onSelectLayer() {
          console.log('this.map.options.layer ', this.map.options.layer);
        }
      }, {
        key: "testOneValue",
        value: function testOneValue() {
          this.map.latitude = "-15.795650";
          this.map.longitude = "-47.878197";
          this.map.marker = 'Salão Metropolitano';
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("latitude", this.map.latitude).set("longitude", this.map.longitude).set("marker", this.map.marker).set("massive", "").set("coordenatesList", "").set("options", JSON.stringify(this.map.options));
          this.mapURL = this.mapService.getMapaURL(params);
        }
      }, {
        key: "testMassiveValues",
        value: function testMassiveValues() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var coordenates, token, index, _params, params;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    coordenates = [];
                    coordenates.push({
                      "latitude": "-15.795650",
                      "longitude": "-47.878197",
                      "marker": 'Museu do canção',
                      "color": 'RED'
                    });
                    coordenates.push({
                      "latitude": "-15.798153",
                      "longitude": "-47.875527",
                      "marker": 'Cat&#201dral Metropolitana',
                      "color": 'GREEN'
                    });
                    coordenates.push({
                      "latitude": "-15.799407",
                      "longitude": "-47.864152",
                      "marker": 'Congresso Nacional',
                      "color": 'BLUE'
                    });
                    coordenates.push({
                      "latitude": "-15.783896",
                      "longitude": "-47.913365",
                      "marker": 'Memorial JK',
                      "color": 'RED'
                    });
                    coordenates.push({
                      "latitude": "-15.799887",
                      "longitude": "-47.907853",
                      "marker": 'Parque da cidade',
                      "color": 'BLUE'
                    });
                    coordenates.push({
                      "latitude": "-15.790241",
                      "longitude": "-47.892789",
                      "marker": 'Torre de TV',
                      "color": 'GREEN'
                    });
                    _context.next = 9;
                    return this.mapService.getToken();

                  case 9:
                    token = _context.sent;
                    index = 0;

                  case 11:
                    if (!(index < coordenates.length)) {
                      _context.next = 18;
                      break;
                    }

                    _params = {
                      'token': token,
                      'latitude': coordenates[index].latitude,
                      'longitude': coordenates[index].longitude,
                      'marker': coordenates[index].marker,
                      'color': coordenates[index].color
                    };
                    _context.next = 15;
                    return this.mapService.setCoordenates(_params);

                  case 15:
                    index++;
                    _context.next = 11;
                    break;

                  case 18:
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("token", token).set("options", JSON.stringify(this.map.options));
                    this.mapURL = this.mapService.getMapaURLMassive(params);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "testCustomMarkert",
        value: function testCustomMarkert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var coordenates, token, index, _params2, params;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    coordenates = [];
                    coordenates.push({
                      "latitude": "-15.795650",
                      "longitude": "-47.878197",
                      "marker": '<p style="color:red;"><b>Museu Nacional</b></p>',
                      "color": 'RED'
                    });
                    coordenates.push({
                      "latitude": "-15.798153",
                      "longitude": "-47.875527",
                      "marker": '<p style="color:green;"><b>Salão Metropolitano</b></p>',
                      "color": 'GREEN'
                    });
                    coordenates.push({
                      "latitude": "-15.799407",
                      "longitude": "-47.864152",
                      "marker": '<p style="color:blue;"><b>Congresso Nacional</b></p>',
                      "color": 'BLUE'
                    });
                    _context2.next = 6;
                    return this.mapService.getToken();

                  case 6:
                    token = _context2.sent;
                    index = 0;

                  case 8:
                    if (!(index < coordenates.length)) {
                      _context2.next = 15;
                      break;
                    }

                    _params2 = {
                      'token': token,
                      'latitude': coordenates[index].latitude,
                      'longitude': coordenates[index].longitude,
                      'marker': coordenates[index].marker,
                      'color': coordenates[index].color
                    };
                    _context2.next = 12;
                    return this.mapService.setCoordenates(_params2);

                  case 12:
                    index++;
                    _context2.next = 8;
                    break;

                  case 15:
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("token", token).set("options", JSON.stringify(this.map.options));
                    this.mapURL = this.mapService.getMapaURLMassive(params);

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "testMassiveValuesSpecificMarkets",
        value: function testMassiveValuesSpecificMarkets() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var coordenates, token, index, _params3, params;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    coordenates = [];
                    coordenates.push({
                      "latitude": "-15.795650",
                      "longitude": "-47.878197",
                      "marker": 'Museu do canção',
                      "color": 'RED'
                    });
                    coordenates.push({
                      "latitude": "-15.798153",
                      "longitude": "-47.875527",
                      "marker": 'Cat&#201dral Metropolitana',
                      "color": 'GREEN'
                    });
                    coordenates.push({
                      "latitude": "-15.799407",
                      "longitude": "-47.864152",
                      "marker": 'Congresso Nacional',
                      "color": 'BLUE'
                    });
                    coordenates.push({
                      "latitude": "-15.783896",
                      "longitude": "-47.913365",
                      "marker": 'Memorial JK',
                      "color": 'RED'
                    });
                    coordenates.push({
                      "latitude": "-15.799887",
                      "longitude": "-47.907853",
                      "marker": 'Parque da cidade',
                      "color": 'BLUE'
                    });
                    coordenates.push({
                      "latitude": "-15.790241",
                      "longitude": "-47.892789",
                      "marker": 'Torre de TV',
                      "color": 'GREEN'
                    });
                    _context3.next = 9;
                    return this.mapService.getToken();

                  case 9:
                    token = _context3.sent;
                    index = 0;

                  case 11:
                    if (!(index < coordenates.length)) {
                      _context3.next = 18;
                      break;
                    }

                    _params3 = {
                      'token': token,
                      'latitude': coordenates[index].latitude,
                      'longitude': coordenates[index].longitude,
                      'marker': coordenates[index].marker,
                      'color': coordenates[index].color
                    };
                    _context3.next = 15;
                    return this.mapService.setCoordenates(_params3);

                  case 15:
                    index++;
                    _context3.next = 11;
                    break;

                  case 18:
                    this.map.options.showSpecificMarkerts = [0, 5];
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("token", token).set("options", JSON.stringify(this.map.options));
                    this.mapURL = this.mapService.getMapaURLMassive(params);

                  case 21:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/models/map.ts":
  /*!*******************************!*\
    !*** ./src/app/models/map.ts ***!
    \*******************************/

  /*! exports provided: Map */

  /***/
  function srcAppModelsMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Map", function () {
      return Map;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Map = function Map() {
      _classCallCheck(this, Map);

      this.massive = "";
      this.coordenatesList = "";
      this.options = new Option();
    };

    var Option = function Option() {
      _classCallCheck(this, Option);

      this.layer = 1;
      this.shape = 1;
      this.shapeColor = 'red';
      this.hideMarkets = false;
      this.showSpecificMarkerts = []; // showSpecificMarkerts: Array<any> = [0,5];
    };
    /***/

  },

  /***/
  "./src/app/models/value.ts":
  /*!*********************************!*\
    !*** ./src/app/models/value.ts ***!
    \*********************************/

  /*! exports provided: Value */

  /***/
  function srcAppModelsValueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Value", function () {
      return Value;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Value = function Value(_id, _name) {
      _classCallCheck(this, Value);

      this.id = _id;
      this.name = _name;
    };
    /***/

  },

  /***/
  "./src/app/services/map.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/map.service.ts ***!
    \*****************************************/

  /*! exports provided: MapService */

  /***/
  function srcAppServicesMapServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapService", function () {
      return MapService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //SERVICE


    var MapService = /*#__PURE__*/function () {
      function MapService(domSanitizer, http) {
        _classCallCheck(this, MapService);

        this.domSanitizer = domSanitizer;
        this.http = http;
        this.mapServiceURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mapServiceURL;
        this.mapURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapServiceURL);
      }

      _createClass(MapService, [{
        key: "getToken",
        value: function getToken() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", this.http.get(this.mapServiceURL + '/getToken').toPromise().then(function (response) {
                      if (response.status) {
                        console.info(response.message);
                        return response.result;
                      } else {
                        console.error('error');
                        return;
                      }
                    }));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "setCoordenates",
        value: function setCoordenates(coordenates) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    coordenates.marker ? coordenates.marker = btoa(coordenates.marker) : "";
                    return _context5.abrupt("return", this.http.post(this.mapServiceURL + '/setCoordenates', coordenates).toPromise().then(function (response) {
                      if (response.status) {
                        console.info(response.message);
                      } else {
                        console.error(response.message);
                      }
                    }));

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getMapaURL",
        value: function getMapaURL(params) {
          return this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapServiceURL + '?' + params);
        }
      }, {
        key: "getMapaURLMassive",
        value: function getMapaURLMassive(params) {
          return this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapServiceURL + '/showMassiveMap?' + params);
        }
      }, {
        key: "getMapaUrlRandom",
        value: function getMapaUrlRandom() {
          return this.domSanitizer.bypassSecurityTrustResourceUrl(this.mapServiceURL);
        }
      }]);

      return MapService;
    }();

    MapService.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], MapService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map