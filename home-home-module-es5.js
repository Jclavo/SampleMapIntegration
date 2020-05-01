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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Integrate Map Sample\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrolling=\"no\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Integrate Map Sample</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-row text-center>\n    <ion-col col-6>\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"testOneValue()\">1 Markert</ion-button>\n    </ion-col>\n    <ion-col col-6>\n      <ion-button expand=\"full\" id=\"salvarSalir\" color=\"danger\" (click)=\"testMassiveValues()\">Many Markets</ion-button>\n    </ion-col>\n    <ion-col col-6>\n      <ion-button expand=\"full\" id=\"salvarSalir\" color=\"success\" (click)=\"testCustomMarkert()\">Custom Markets\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <iframe [src]=\"mapURL\" width=\"100%\" height=\"100%\" scrolling=\"no\" frameborder=\"0\"></iframe>\n\n</ion-content>";
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


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pjbGF2by9pb25pYy13b3Jrc3BhY2UvU2FtcGxlTWFwSW50ZWdyYXRpb24vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iXX0= */";
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
    "./src/app/models/map.ts"); //SERVICE
    //MODELS


    var HomePage = /*#__PURE__*/function () {
      function HomePage(mapService, http) {
        _classCallCheck(this, HomePage);

        this.mapService = mapService;
        this.http = http;
        this.mapa = new _models_map__WEBPACK_IMPORTED_MODULE_4__["Mapa"]();
        this.mapas = [];
        this.mapURL = this.mapService.getMapaUrlRandom();
      }

      _createClass(HomePage, [{
        key: "testOneValue",
        value: function testOneValue() {
          this.mapa.latitude = "-15.795650";
          this.mapa.longitude = "-47.878197"; // this.mapa.marker = '<p style="color:green;"><b>Salão Metropolitano</b></p>';

          this.mapa.marker = 'Salão Metropolitano';
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("latitude", this.mapa.latitude).set("longitude", this.mapa.longitude).set("marker", this.mapa.marker).set("massive", "").set("coordenatesList", "");
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
                    _context.next = 6;
                    return this.mapService.getToken();

                  case 6:
                    token = _context.sent;
                    index = 0;

                  case 8:
                    if (!(index < coordenates.length)) {
                      _context.next = 15;
                      break;
                    }

                    _params = {
                      'token': token,
                      'latitude': coordenates[index].latitude,
                      'longitude': coordenates[index].longitude,
                      'marker': coordenates[index].marker,
                      // 'marker': btoa(coordenates[index].marker),
                      'color': coordenates[index].color
                    };
                    _context.next = 12;
                    return this.mapService.setCoordenates(_params);

                  case 12:
                    index++;
                    _context.next = 8;
                    break;

                  case 15:
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("token", token);
                    this.mapURL = this.mapService.getMapaURLMassive(params);

                  case 17:
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
                    params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("token", token);
                    this.mapURL = this.mapService.getMapaURLMassive(params);

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/models/map.ts":
  /*!*******************************!*\
    !*** ./src/app/models/map.ts ***!
    \*******************************/

  /*! exports provided: Mapa */

  /***/
  function srcAppModelsMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mapa", function () {
      return Mapa;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Mapa = function Mapa() {
      _classCallCheck(this, Mapa);

      this.massive = "";
      this.coordenatesList = "";
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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", this.http.get(this.mapServiceURL + '/getToken').toPromise().then(function (response) {
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
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "setCoordenates",
        value: function setCoordenates(coordenates) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    coordenates.marker ? coordenates.marker = btoa(coordenates.marker) : "";
                    return _context4.abrupt("return", this.http.post(this.mapServiceURL + '/setCoordenates', coordenates).toPromise().then(function (response) {
                      if (response.status) {
                        console.info(response.message);
                      } else {
                        console.error(response.message);
                      }
                    }));

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
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