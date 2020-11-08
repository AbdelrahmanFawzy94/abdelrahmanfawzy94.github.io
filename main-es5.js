function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/pages/not-found/not-found.component */
    "./src/app/components/pages/not-found/not-found.component.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-modules-landing-landing-module */
        "components-modules-landing-landing-module").then(__webpack_require__.bind(null,
        /*! ./components/modules/landing/landing.module */
        "./src/app/components/modules/landing/landing.module.ts")).then(function (m) {
          return m.LandingModule;
        });
      }
    }, {
      path: '**',
      component: _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'adminPanel';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/shared/shared.module */
    "./src/app/components/shared/shared.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/pages/not-found/not-found.component */
    "./src/app/components/pages/not-found/not-found.component.ts");
    /* harmony import */


    var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @sweetalert2/ngx-sweetalert2 */
    "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [// { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SweetAlert2Module"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        },
        defaultLanguage: 'en'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SweetAlert2Module"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__["SweetAlert2Module"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
              useFactory: createTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            },
            defaultLanguage: 'en'
          })],
          providers: [// { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
          ],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/not-found/not-found.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/pages/not-found/not-found.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentsPagesNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/components/svg-logo/svg-logo.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/shared/components/svg-logo/svg-logo.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SvgLogoComponent */

  /***/
  function srcAppComponentsSharedComponentsSvgLogoSvgLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SvgLogoComponent", function () {
      return SvgLogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SvgLogoComponent =
    /*#__PURE__*/
    function () {
      function SvgLogoComponent() {
        _classCallCheck(this, SvgLogoComponent);
      }

      _createClass(SvgLogoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SvgLogoComponent;
    }();

    SvgLogoComponent.ɵfac = function SvgLogoComponent_Factory(t) {
      return new (t || SvgLogoComponent)();
    };

    SvgLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SvgLogoComponent,
      selectors: [["app-svg-logo"]],
      decls: 29,
      vars: 0,
      consts: [["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 617 343", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 617 343"], ["id", "Layer_1_1_"], ["id", "Layer_3", 1, "st0"], ["x1", "648.9", "y1", "-78.1", "x2", "397.7", "y2", "143.5", 1, "st1"], ["x1", "395.6", "y1", "-91.3", "x2", "144.4", "y2", "130.4", 1, "st1"], ["x1", "671", "y1", "61.6", "x2", "419.8", "y2", "283.2", 1, "st1"], ["x1", "573.3", "y1", "7.8", "x2", "223", "y2", "7.8", 1, "st1"], ["x1", "545.4", "y1", "232.8", "x2", "195.1", "y2", "232.8", 1, "st1"], ["x1", "686.7", "y1", "-53.6", "x2", "336.4", "y2", "-53.6", 1, "st1"], ["x1", "315.1", "y1", "-84.1", "x2", "197.5", "y2", "263.6", 1, "st1"], ["x1", "577.5", "y1", "-69.6", "x2", "459.9", "y2", "278.1", 1, "st1"], ["x1", "636.8", "y1", "-97.9", "x2", "519.2", "y2", "249.8", 1, "st1"], ["id", "Layer_4"], ["id", "Layer_5"], ["id", "Layer_6"], ["id", "Layer_8"], ["id", "Layer_7"], ["id", "Layer_9"], ["id", "Layer_10"], ["points", "526.8,90.5 450.7,315.5 183.4,315.5 259.5,90.5 \t", 1, "st2"], ["d", "M595.7,29.8L527.1,90c-0.3,0.2-0.6,0.4-0.9,0.4l-262.9,0c-1.3,0-3.9-1.6-3-2.5L328,29.4c0.3-0.2,0.6-0.4,1-0.4\n\t\tl266.4,0C595.8,29,596,29.5,595.7,29.8z", 1, "st2"], ["d", "M520.5,255.3l-66.2,60c-1,0.9-2.6-3.2-2.1-4.4l74.4-220c0.1-0.2,0.3-0.4,0.4-0.6l65.7-58.8\n\t\tc1.1-0.9,3.7-2.9,3.2-1.5l-75.1,224.8C520.8,254.9,520.7,255.1,520.5,255.3z", 1, "st2"], ["d", "M57.4,148.3l154.4,69.1c48.6,24.1,96.1-1.5,96.1-1.5c17.7-9.1,63-52.2,63-52.2c30-25.4-8.9-47.6-8.9-47.6\n\t\tl-86.1-53.5c0,0-58.6-37.2-93.5,15.9c0,0-50.7-27.7-79.3,25c0,0-54.2-13.6-76.8,30.9L57.4,148.3z", 1, "st3"], ["x1", "182.4", "y1", "78.4", "x2", "256.3", "y2", "121", 1, "st4"], ["x1", "103.2", "y1", "103.3", "x2", "182.4", "y2", "149.2", 1, "st4"], ["d", "M364.9,276.7", 1, "st5"], ["d", "M465.5,276.7", 1, "st5"], ["points", "400.1,149.3 505,149.3 505,136.6 407.1,136.6 \t"], ["points", "350.8,249.9 470.6,249.9 470.6,237.7 358.8,237.7 \t"]],
      template: function SvgLogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "line", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "line", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "line", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "line", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "line", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "line", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "g", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "g", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "g", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "g", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "polygon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "line", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "line", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "polygon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "polygon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["html[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n[_ngcontent-%COMP%]:root {\n  \n  --primary-hue: 43;\n  --primary-saturation: 100%;\n  --primary-light: 50%;\n  --primary-color: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light)\n  );\n  --alpha-primary-color-1: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.1\n  );\n  --alpha-primary-color-2: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.2\n  );\n  --alpha-primary-color-3: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.3\n  );\n  --alpha-primary-color-4: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.4\n  );\n  --alpha-primary-color-5: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.5\n  );\n  --alpha-primary-color-6: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.6\n  );\n  --alpha-primary-color-7: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.7\n  );\n  --alpha-primary-color-8: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.8\n  );\n  --alpha-primary-color-9: hsla(\n    var(--primary-hue),\n    var(--primary-saturation),\n    var(--primary-light),\n    0.9\n  );\n  --rotated-primary-color-20: hsl(\n    calc(var(--primary-hue) - 20),\n    var(--primary-saturation),\n    var(--primary-light)\n  );\n  --primary-color-lighten-5: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 5%)\n  );\n  --primary-color-lighten-10: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 10%)\n  );\n  --primary-color-lighten-15: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 15%)\n  );\n  --primary-color-lighten-20: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 20%)\n  );\n  --primary-color-lighten-25: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 25%)\n  );\n  --primary-color-lighten-30: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 30%)\n  );\n  --primary-color-lighten-35: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 35%)\n  );\n  --primary-color-lighten-40: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 40%)\n  );\n  --primary-color-lighten-45: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 45%)\n  );\n  --primary-color-lighten-50: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) + 50%)\n  );\n  --primary-color-darken-5: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 5%)\n  );\n  --primary-color-darken-10: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 10%)\n  );\n  --primary-color-darken-15: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 15%)\n  );\n  --primary-color-darken-20: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 20%)\n  );\n  --primary-color-darken-25: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 25%)\n  );\n  --primary-color-darken-30: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 30%)\n  );\n  --primary-color-darken-35: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 35%)\n  );\n  --primary-color-darken-40: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 40%)\n  );\n  --primary-color-darken-45: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 45%)\n  );\n  --primary-color-darken-50: hsl(\n    var(--primary-hue),\n    var(--primary-saturation),\n    calc(var(--primary-light) - 50%)\n  );\n  \n  --secondry-hue: 185;\n  --secondry-saturation: 100%;\n  --secondry-light: 50%;\n  --secondry-color: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light)\n  );\n  --alpha-secondry-color-1: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.1\n  );\n  --alpha-secondry-color-2: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.2\n  );\n  --alpha-secondry-color-3: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.3\n  );\n  --alpha-secondry-color-4: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.4\n  );\n  --alpha-secondry-color-5: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.5\n  );\n  --alpha-secondry-color-6: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.6\n  );\n  --alpha-secondry-color-7: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.7\n  );\n  --alpha-secondry-color-8: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.8\n  );\n  --alpha-secondry-color-9: hsla(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    var(--secondry-light),\n    0.9\n  );\n  --rotated-secondry-color-20: hsl(\n    calc(var(--secondry-hue) - 20),\n    var(--secondry-saturation),\n    var(--secondry-light)\n  );\n  --secondry-color-lighten-10: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 10%)\n  );\n  --secondry-color-lighten-15: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 15%)\n  );\n  --secondry-color-lighten-20: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 20%)\n  );\n  --secondry-color-lighten-25: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 25%)\n  );\n  --secondry-color-lighten-30: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 30%)\n  );\n  --secondry-color-lighten-35: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 35%)\n  );\n  --secondry-color-lighten-40: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 40%)\n  );\n  --secondry-color-lighten-45: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 45%)\n  );\n  --secondry-color-lighten-50: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) + 50%)\n  );\n  --secondry-color-darken-10: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 10%)\n  );\n  --secondry-color-darken-15: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 15%)\n  );\n  --secondry-color-darken-20: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 20%)\n  );\n  --secondry-color-darken-25: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 25%)\n  );\n  --secondry-color-darken-30: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 30%)\n  );\n  --secondry-color-darken-35: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 35%)\n  );\n  --secondry-color-darken-40: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 40%)\n  );\n  --secondry-color-darken-45: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 45%)\n  );\n  --secondry-color-darken-50: hsl(\n    var(--secondry-hue),\n    var(--secondry-saturation),\n    calc(var(--secondry-light) - 50%)\n  );\n  \n  --white-hue: 0;\n  --white-saturation: 0%;\n  --white-light: 100%;\n  --white-color: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    var(--white-light)\n  );\n  --alpha-white-color-2: hsla(\n    var(--white-hue),\n    var(--white-saturation),\n    var(--white-light),\n    0.2\n  );\n  --white-color-darken-10: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 10%)\n  );\n  --white-color-darken-15: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 15%)\n  );\n  --white-color-darken-20: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 20%)\n  );\n  --white-color-darken-25: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 25%)\n  );\n  --white-color-darken-30: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 30%)\n  );\n  --white-color-darken-35: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 35%)\n  );\n  --white-color-darken-40: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 40%)\n  );\n  --white-color-darken-45: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 45%)\n  );\n  --white-color-darken-50: hsl(\n    var(--white-hue),\n    var(--white-saturation),\n    calc(var(--white-light) - 50%)\n  );\n  \n  --black-hue: 0;\n  --black-saturation: 0%;\n  --black-light: 0%;\n  --black-color: hsl(\n    var(--black-hue),\n    var(--black-saturation),\n    var(--black-light)\n  );\n  --black-color-lighten-10: hsl(\n    var(--black-hue),\n    var(--black-saturation),\n    calc(var(--black-light) + 10%)\n  );\n}\n\n\n\n\n\n\n\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n\n.bg-opacity-primary-1[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-1);\n}\n\n.bg-opacity-primary-2[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-2);\n}\n\n.bg-opacity-primary-3[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-3);\n}\n\n.bg-opacity-primary-4[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-4);\n}\n\n.bg-opacity-primary-5[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-5);\n}\n\n.bg-opacity-primary-6[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-6);\n}\n\n.bg-opacity-primary-7[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-7);\n}\n\n.bg-opacity-primary-8[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-8);\n}\n\n.bg-opacity-primary-9[_ngcontent-%COMP%] {\n  background-color: var(--alpha-primary-color-9);\n}\n\n.bg-rotated-primary-20[_ngcontent-%COMP%] {\n  background-color: var(--rotated-primary-color-20);\n}\n\n.bg-primary-lighter-5[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-5);\n}\n\n.bg-primary-lighter-10[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-10);\n}\n\n.bg-primary-lighter-15[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-15);\n}\n\n.bg-primary-lighter-20[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-20);\n}\n\n.bg-primary-lighter-25[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-25);\n}\n\n.bg-primary-lighter-30[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-30);\n}\n\n.bg-primary-lighter-35[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-35);\n}\n\n.bg-primary-lighter-40[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-40);\n}\n\n.bg-primary-lighter-45[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-45);\n}\n\n.bg-primary-lighter-50[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-lighten-50);\n}\n\n.bg-primary-darker-5[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-5);\n}\n\n.bg-primary-darker-10[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-10);\n}\n\n.bg-primary-darker-15[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-15);\n}\n\n.bg-primary-darker-20[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-20);\n}\n\n.bg-primary-darker-25[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-25);\n}\n\n.bg-primary-darker-30[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-30);\n}\n\n.bg-primary-darker-35[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-35);\n}\n\n.bg-primary-darker-40[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-40);\n}\n\n.bg-primary-darker-45[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-45);\n}\n\n.bg-primary-darker-50[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-darken-50);\n}\n\n.text-secondry[_ngcontent-%COMP%] {\n  color: var(--secondry-color);\n}\n\n.bg-secondry[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color);\n}\n\n.bg-opacity-secondry-1[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-1);\n}\n\n.bg-opacity-secondry-2[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-2);\n}\n\n.bg-opacity-secondry-3[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-3);\n}\n\n.bg-opacity-secondry-4[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-4);\n}\n\n.bg-opacity-secondry-5[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-5);\n}\n\n.bg-opacity-secondry-6[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-6);\n}\n\n.bg-opacity-secondry-7[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-7);\n}\n\n.bg-opacity-secondry-8[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-8);\n}\n\n.bg-opacity-secondry-9[_ngcontent-%COMP%] {\n  background-color: var(--alpha-secondry-color-9);\n}\n\n.bg-rotated-secondry-20[_ngcontent-%COMP%] {\n  background-color: var(--rotated-secondry-color-20);\n}\n\n.bg-secondry-lighter-10[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-10);\n}\n\n.bg-secondry-lighter-15[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-15);\n}\n\n.bg-secondry-lighter-20[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-20);\n}\n\n.bg-secondry-lighter-25[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-25);\n}\n\n.bg-secondry-lighter-30[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-30);\n}\n\n.bg-secondry-lighter-35[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-35);\n}\n\n.bg-secondry-lighter-40[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-40);\n}\n\n.bg-secondry-lighter-45[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-45);\n}\n\n.bg-secondry-lighter-50[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-lighten-50);\n}\n\n.bg-secondry-darker-10[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-10);\n}\n\n.bg-secondry-darker-15[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-15);\n}\n\n.bg-secondry-darker-20[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-20);\n}\n\n.bg-secondry-darker-25[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-25);\n}\n\n.bg-secondry-darker-30[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-30);\n}\n\n.bg-secondry-darker-35[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-35);\n}\n\n.bg-secondry-darker-40[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-40);\n}\n\n.bg-secondry-darker-45[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-45);\n}\n\n.bg-secondry-darker-50[_ngcontent-%COMP%] {\n  background-color: var(--secondry-color-darken-50);\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: var(--white-color);\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: var(--white-color);\n}\n\n.bg-opacity-white-2[_ngcontent-%COMP%] {\n  background-color: var(--alpha-white-color-2);\n}\n\n.bg-white-darker-10[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-10);\n}\n\n.bg-white-darker-15[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-15);\n}\n\n.bg-white-darker-20[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-20);\n}\n\n.bg-white-darker-25[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-25);\n}\n\n.bg-white-darker-30[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-30);\n}\n\n.bg-white-darker-35[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-35);\n}\n\n.bg-white-darker-40[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-40);\n}\n\n.bg-white-darker-45[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-45);\n}\n\n.bg-white-darker-50[_ngcontent-%COMP%] {\n  background-color: var(--white-color-darken-50);\n}\n\n.text-black[_ngcontent-%COMP%] {\n  color: var(--black-color);\n}\n\n.bg-black[_ngcontent-%COMP%] {\n  background-color: var(--black-color);\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: en;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--white-color);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--white-color-darken-35);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-color);\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\nsvg[_ngcontent-%COMP%]   .st0[_ngcontent-%COMP%] {\n  display: none;\n}\n\nsvg[_ngcontent-%COMP%]   .st1[_ngcontent-%COMP%] {\n  display: inline;\n  fill: none;\n  stroke-miterlimit: 10;\n}\n\nsvg[_ngcontent-%COMP%]   .st2[_ngcontent-%COMP%] {\n  fill: var(--primary-color);\n  stroke: #000000;\n  stroke-width: 13;\n  stroke-miterlimit: 10;\n}\n\nsvg[_ngcontent-%COMP%]   .st3[_ngcontent-%COMP%] {\n  fill: #ffffff;\n  stroke: #000000;\n  stroke-width: 13;\n  stroke-miterlimit: 10;\n}\n\nsvg[_ngcontent-%COMP%]   .st4[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #000000;\n  stroke-width: 13;\n  stroke-miterlimit: 10;\n}\n\nsvg[_ngcontent-%COMP%]   .st5[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #000000;\n  stroke-width: 6.7477;\n  stroke-miterlimit: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9zdmctbG9nby9DOlxcVXNlcnNcXEFiZGVscmFobWFuXFxEZXNrdG9wXFxlbmcgbW9hdGF6XFxjb2RlXFxnaXRIdWJcXHAtZGVsaXZlcnkvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9zdmctbG9nby9zdmctbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29tcG9uZW50cy9zdmctbG9nby9DOlxcVXNlcnNcXEFiZGVscmFobWFuXFxEZXNrdG9wXFxlbmcgbW9hdGF6XFxjb2RlXFxnaXRIdWJcXHAtZGVsaXZlcnkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcY29tcG9uZW50c1xcc3ZnLWxvZ29cXHN2Zy1sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURLQTtFQUNFLDZHQUFBO0VBRUEsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBR0E7Ozs7R0FBQTtFQU9BOzs7OztHQUFBO0VBUUE7Ozs7O0dBQUE7RUFRQTs7Ozs7R0FBQTtFQVFBOzs7OztHQUFBO0VBUUE7Ozs7O0dBQUE7RUFRQTs7Ozs7R0FBQTtFQVFBOzs7OztHQUFBO0VBUUE7Ozs7O0dBQUE7RUFRQTs7Ozs7R0FBQTtFQVFBOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU1BLDZHQUFBO0VBRUEsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBR0E7Ozs7R0FBQTtFQU9BOzs7OztHQUFBO0VBUUE7Ozs7O0dBQUE7RUFRQTs7Ozs7R0FBQTtFQVFBOzs7OztHQUFBO0VBUUE7Ozs7O0dBQUE7RUFRQTs7Ozs7R0FBQTtFQVFBOzs7OztHQUFBO0VBUUE7Ozs7O0dBQUE7RUFRQTs7Ozs7R0FBQTtFQVFBOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFNQSw2R0FBQTtFQUVBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBR0E7Ozs7R0FBQTtFQU9BOzs7OztHQUFBO0VBUUE7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBT0E7Ozs7R0FBQTtFQU9BOzs7O0dBQUE7RUFPQTs7OztHQUFBO0VBTUEsNkdBQUE7RUFFQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUdBOzs7O0dBQUE7RUFPQTs7OztHQUFBO0FDdkpGOztBRGtNQSw2R0FBQTs7QUFnQ0EsNkdBQUE7O0FBYUEsNkdBQUE7O0FBT0E7RUFDRSwyQkF4RlE7QUN4SlY7O0FEbVBBO0VBQ0Usc0NBNUZRO0FDcEpWOztBRG1QQTtFQUNFLDhDQS9Ga0I7QUNqSnBCOztBRG1QQTtFQUNFLDhDQWxHa0I7QUM5SXBCOztBRG1QQTtFQUNFLDhDQXJHa0I7QUMzSXBCOztBRG1QQTtFQUNFLDhDQXhHa0I7QUN4SXBCOztBRG1QQTtFQUNFLDhDQTNHa0I7QUNySXBCOztBRG1QQTtFQUNFLDhDQTlHa0I7QUNsSXBCOztBRG1QQTtFQUNFLDhDQWpIa0I7QUMvSHBCOztBRG1QQTtFQUNFLDhDQXBIa0I7QUM1SHBCOztBRG1QQTtFQUNFLDhDQXZIa0I7QUN6SHBCOztBRG1QQTtFQUNFLGlEQXpIbUI7QUN2SHJCOztBRG1QQTtFQUNFLGdEQTNIaUI7QUNySG5COztBRG1QQTtFQUNFLGlEQTlIa0I7QUNsSHBCOztBRG1QQTtFQUNFLGlEQWpJa0I7QUMvR3BCOztBRG1QQTtFQUNFLGlEQXBJa0I7QUM1R3BCOztBRG1QQTtFQUNFLGlEQXZJa0I7QUN6R3BCOztBRG1QQTtFQUNFLGlEQTFJa0I7QUN0R3BCOztBRG1QQTtFQUNFLGlEQTdJa0I7QUNuR3BCOztBRG1QQTtFQUNFLGlEQWhKa0I7QUNoR3BCOztBRG1QQTtFQUNFLGlEQW5Ka0I7QUM3RnBCOztBRG1QQTtFQUNFLGlEQXRKa0I7QUMxRnBCOztBRG1QQTtFQUNFLCtDQXhKaUI7QUN4Rm5COztBRG1QQTtFQUNFLGdEQTNKa0I7QUNyRnBCOztBRG1QQTtFQUNFLGdEQTlKa0I7QUNsRnBCOztBRG1QQTtFQUNFLGdEQWpLa0I7QUMvRXBCOztBRG1QQTtFQUNFLGdEQXBLa0I7QUM1RXBCOztBRG1QQTtFQUNFLGdEQXZLa0I7QUN6RXBCOztBRG1QQTtFQUNFLGdEQTFLa0I7QUN0RXBCOztBRG1QQTtFQUNFLGdEQTdLa0I7QUNuRXBCOztBRG1QQTtFQUNFLGdEQWhMa0I7QUNoRXBCOztBRG1QQTtFQUNFLGdEQW5Ma0I7QUM3RHBCOztBRG9QQTtFQUNFLDRCQXJMUztBQzVEWDs7QURvUEE7RUFDRSx1Q0F6TFM7QUN4RFg7O0FEb1BBO0VBQ0UsK0NBNUxtQjtBQ3JEckI7O0FEb1BBO0VBQ0UsK0NBL0xtQjtBQ2xEckI7O0FEb1BBO0VBQ0UsK0NBbE1tQjtBQy9DckI7O0FEb1BBO0VBQ0UsK0NBck1tQjtBQzVDckI7O0FEb1BBO0VBQ0UsK0NBeE1tQjtBQ3pDckI7O0FEb1BBO0VBQ0UsK0NBM01tQjtBQ3RDckI7O0FEb1BBO0VBQ0UsK0NBOU1tQjtBQ25DckI7O0FEb1BBO0VBQ0UsK0NBak5tQjtBQ2hDckI7O0FEb1BBO0VBQ0UsK0NBcE5tQjtBQzdCckI7O0FEb1BBO0VBQ0Usa0RBdE5vQjtBQzNCdEI7O0FEb1BBO0VBQ0Usa0RBek5tQjtBQ3hCckI7O0FEb1BBO0VBQ0Usa0RBNU5tQjtBQ3JCckI7O0FEb1BBO0VBQ0Usa0RBL05tQjtBQ2xCckI7O0FEb1BBO0VBQ0Usa0RBbE9tQjtBQ2ZyQjs7QURvUEE7RUFDRSxrREFyT21CO0FDWnJCOztBRG9QQTtFQUNFLGtEQXhPbUI7QUNUckI7O0FEb1BBO0VBQ0Usa0RBM09tQjtBQ05yQjs7QURvUEE7RUFDRSxrREE5T21CO0FDSHJCOztBRG9QQTtFQUNFLGtEQWpQbUI7QUNBckI7O0FEb1BBO0VBQ0UsaURBcFBtQjtBQ0dyQjs7QURvUEE7RUFDRSxpREF2UG1CO0FDTXJCOztBRG9QQTtFQUNFLGlEQTFQbUI7QUNTckI7O0FEb1BBO0VBQ0UsaURBN1BtQjtBQ1lyQjs7QURvUEE7RUFDRSxpREFoUW1CO0FDZXJCOztBRG9QQTtFQUNFLGlEQW5RbUI7QUNrQnJCOztBRG9QQTtFQUNFLGlEQXRRbUI7QUNxQnJCOztBRG9QQTtFQUNFLGlEQXpRbUI7QUN3QnJCOztBRG9QQTtFQUNFLGlEQTVRbUI7QUMyQnJCOztBRHFQQTtFQUNFLHlCQTlRTTtBQzRCUjs7QURxUEE7RUFDRSxvQ0FsUk07QUNnQ1I7O0FEcVBBO0VBQ0UsNENBclJnQjtBQ21DbEI7O0FEcVBBO0VBQ0UsOENBeFJnQjtBQ3NDbEI7O0FEcVBBO0VBQ0UsOENBM1JnQjtBQ3lDbEI7O0FEcVBBO0VBQ0UsOENBOVJnQjtBQzRDbEI7O0FEcVBBO0VBQ0UsOENBalNnQjtBQytDbEI7O0FEcVBBO0VBQ0UsOENBcFNnQjtBQ2tEbEI7O0FEcVBBO0VBQ0UsOENBdlNnQjtBQ3FEbEI7O0FEcVBBO0VBQ0UsOENBMVNnQjtBQ3dEbEI7O0FEcVBBO0VBQ0UsOENBN1NnQjtBQzJEbEI7O0FEcVBBO0VBQ0UsOENBaFRnQjtBQzhEbEI7O0FEc1BBO0VBQ0UseUJBbFRNO0FDK0RSOztBRHNQQTtFQUNFLG9DQXRUTTtBQ21FUjs7QURvUUE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ2pRRjs7QURvUUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ2pRRjs7QURxUUE7RUFDRSxVQUFBO0FDbFFGOztBRHNRQTtFQUNFLDhCQXZXTTtBQ29HUjs7QUR1UUE7RUFDRSx3Q0FyV2dCO0FDaUdsQjs7QUR3UUE7RUFDRSxnQ0FyYlE7QUNnTFY7O0FEMFFBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUN2UUY7RUR5UUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUN2UUY7QUFDRjs7QUQrUEE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQ3ZRRjtFRHlRQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQ3ZRRjtBQUNGOztBQzV1QkU7RUFDRSxhQUFBO0FEOHVCSjs7QUM1dUJFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBRDh1Qko7O0FDNXVCRTtFQUNFLDBCRndpQk07RUV2aUJOLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEOHVCSjs7QUM1dUJFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEOHVCSjs7QUM1dUJFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEOHVCSjs7QUM1dUJFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FEOHVCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NvbXBvbmVudHMvc3ZnLWxvZ28vc3ZnLWxvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT0+IGpzXHJcbi8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5LWh1ZScsICcyNTYnKVxyXG5cclxuOnJvb3Qge1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLy8gcHJpbWFyeSBjb2xvciB1c2luZyBIU0xcclxuICAtLXByaW1hcnktaHVlOiA0MztcclxuICAtLXByaW1hcnktc2F0dXJhdGlvbjogMTAwJTtcclxuICAtLXByaW1hcnktbGlnaHQ6IDUwJTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBpbiB2YXJpYWJsZVxyXG4gIC0tcHJpbWFyeS1jb2xvcjogaHNsKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIHZhcigtLXByaW1hcnktbGlnaHQpXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBhbHBoYSBpbiB2YXJpYWJsZSAxXHJcbiAgLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTE6IGhzbGEoXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1saWdodCksXHJcbiAgICAwLjFcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGFscGhhIGluIHZhcmlhYmxlIDJcclxuICAtLWFscGhhLXByaW1hcnktY29sb3ItMjogaHNsYShcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICB2YXIoLS1wcmltYXJ5LWxpZ2h0KSxcclxuICAgIDAuMlxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgYWxwaGEgaW4gdmFyaWFibGUgM1xyXG4gIC0tYWxwaGEtcHJpbWFyeS1jb2xvci0zOiBoc2xhKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIHZhcigtLXByaW1hcnktbGlnaHQpLFxyXG4gICAgMC4zXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBhbHBoYSBpbiB2YXJpYWJsZSA0XHJcbiAgLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTQ6IGhzbGEoXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1saWdodCksXHJcbiAgICAwLjRcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGFscGhhIGluIHZhcmlhYmxlIDVcclxuICAtLWFscGhhLXByaW1hcnktY29sb3ItNTogaHNsYShcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICB2YXIoLS1wcmltYXJ5LWxpZ2h0KSxcclxuICAgIDAuNVxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgYWxwaGEgaW4gdmFyaWFibGUgNlxyXG4gIC0tYWxwaGEtcHJpbWFyeS1jb2xvci02OiBoc2xhKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIHZhcigtLXByaW1hcnktbGlnaHQpLFxyXG4gICAgMC42XHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBhbHBoYSBpbiB2YXJpYWJsZSA3XHJcbiAgLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTc6IGhzbGEoXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1saWdodCksXHJcbiAgICAwLjdcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGFscGhhIGluIHZhcmlhYmxlIDhcclxuICAtLWFscGhhLXByaW1hcnktY29sb3ItODogaHNsYShcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICB2YXIoLS1wcmltYXJ5LWxpZ2h0KSxcclxuICAgIDAuOFxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgYWxwaGEgaW4gdmFyaWFibGUgOVxyXG4gIC0tYWxwaGEtcHJpbWFyeS1jb2xvci05OiBoc2xhKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIHZhcigtLXByaW1hcnktbGlnaHQpLFxyXG4gICAgMC45XHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciByb3RhdGVkIHVzaW5nIGNhbGMgMjBcclxuICAtLXJvdGF0ZWQtcHJpbWFyeS1jb2xvci0yMDogaHNsKFxyXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWh1ZSkgLSAyMCksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1saWdodClcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGxpZ2h0ZW4gdXNpbmcgY2FsYyA1JVxyXG4gIC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTU6IGhzbChcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpICsgNSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBsaWdodGVuIHVzaW5nIGNhbGMgMTAlXHJcbiAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tMTA6IGhzbChcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpICsgMTAlKVxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDE1JVxyXG4gIC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTE1OiBoc2woXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSArIDE1JSlcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGxpZ2h0ZW4gdXNpbmcgY2FsYyAyMCVcclxuICAtLXByaW1hcnktY29sb3ItbGlnaHRlbi0yMDogaHNsKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgKyAyMCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBsaWdodGVuIHVzaW5nIGNhbGMgMjUlXHJcbiAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tMjU6IGhzbChcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpICsgMjUlKVxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDMwJVxyXG4gIC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTMwOiBoc2woXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSArIDMwJSlcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGxpZ2h0ZW4gdXNpbmcgY2FsYyAzNSVcclxuICAtLXByaW1hcnktY29sb3ItbGlnaHRlbi0zNTogaHNsKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgKyAzNSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBsaWdodGVuIHVzaW5nIGNhbGMgNDAlXHJcbiAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tNDA6IGhzbChcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpICsgNDAlKVxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDQ1JVxyXG4gIC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTQ1OiBoc2woXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSArIDQ1JSlcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGxpZ2h0ZW4gdXNpbmcgY2FsYyA1MCVcclxuICAtLXByaW1hcnktY29sb3ItbGlnaHRlbi01MDogaHNsKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgKyA1MCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyA1JVxyXG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tNTogaHNsKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgLSA1JSlcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDEwJVxyXG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tMTA6IGhzbChcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpIC0gMTAlKVxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgMTUlXHJcbiAgLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi0xNTogaHNsKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgLSAxNSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyAyMCVcclxuICAtLXByaW1hcnktY29sb3ItZGFya2VuLTIwOiBoc2woXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSAtIDIwJSlcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDI1JVxyXG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tMjU6IGhzbChcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpIC0gMjUlKVxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgMzAlXHJcbiAgLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi0zMDogaHNsKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgLSAzMCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyAzNSVcclxuICAtLXByaW1hcnktY29sb3ItZGFya2VuLTM1OiBoc2woXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSAtIDM1JSlcclxuICApO1xyXG5cclxuICAvLyBwcmltYXJ5IGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDQwJVxyXG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tNDA6IGhzbChcclxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcclxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpIC0gNDAlKVxyXG4gICk7XHJcblxyXG4gIC8vIHByaW1hcnkgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgNDUlXHJcbiAgLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi00NTogaHNsKFxyXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxyXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgLSA0NSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gcHJpbWFyeSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyA1MCVcclxuICAtLXByaW1hcnktY29sb3ItZGFya2VuLTUwOiBoc2woXHJcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXHJcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSAtIDUwJSlcclxuICApO1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIC8vIHNlY29uZHJ5IGNvbG9yIHVzaW5nIEhTTFxyXG4gIC0tc2Vjb25kcnktaHVlOiAxODU7XHJcbiAgLS1zZWNvbmRyeS1zYXR1cmF0aW9uOiAxMDAlO1xyXG4gIC0tc2Vjb25kcnktbGlnaHQ6IDUwJTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgaW4gdmFyaWFibGVcclxuICAtLXNlY29uZHJ5LWNvbG9yOiBoc2woXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1saWdodClcclxuICApO1xyXG5cclxuICAvLyBzZWNvbmRyeSBjb2xvciBhbHBoYSBpbiB2YXJpYWJsZSAxXHJcbiAgLS1hbHBoYS1zZWNvbmRyeS1jb2xvci0xOiBoc2xhKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktbGlnaHQpLFxyXG4gICAgMC4xXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgYWxwaGEgaW4gdmFyaWFibGUgMlxyXG4gIC0tYWxwaGEtc2Vjb25kcnktY29sb3ItMjogaHNsYShcclxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LWxpZ2h0KSxcclxuICAgIDAuMlxyXG4gICk7XHJcblxyXG4gIC8vIHNlY29uZHJ5IGNvbG9yIGFscGhhIGluIHZhcmlhYmxlIDNcclxuICAtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTM6IGhzbGEoXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1saWdodCksXHJcbiAgICAwLjNcclxuICApO1xyXG5cclxuICAvLyBzZWNvbmRyeSBjb2xvciBhbHBoYSBpbiB2YXJpYWJsZSA0XHJcbiAgLS1hbHBoYS1zZWNvbmRyeS1jb2xvci00OiBoc2xhKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktbGlnaHQpLFxyXG4gICAgMC40XHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgYWxwaGEgaW4gdmFyaWFibGUgNVxyXG4gIC0tYWxwaGEtc2Vjb25kcnktY29sb3ItNTogaHNsYShcclxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LWxpZ2h0KSxcclxuICAgIDAuNVxyXG4gICk7XHJcblxyXG4gIC8vIHNlY29uZHJ5IGNvbG9yIGFscGhhIGluIHZhcmlhYmxlIDZcclxuICAtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTY6IGhzbGEoXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1saWdodCksXHJcbiAgICAwLjZcclxuICApO1xyXG5cclxuICAvLyBzZWNvbmRyeSBjb2xvciBhbHBoYSBpbiB2YXJpYWJsZSA3XHJcbiAgLS1hbHBoYS1zZWNvbmRyeS1jb2xvci03OiBoc2xhKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktbGlnaHQpLFxyXG4gICAgMC43XHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgYWxwaGEgaW4gdmFyaWFibGUgOFxyXG4gIC0tYWxwaGEtc2Vjb25kcnktY29sb3ItODogaHNsYShcclxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LWxpZ2h0KSxcclxuICAgIDAuOFxyXG4gICk7XHJcblxyXG4gIC8vIHNlY29uZHJ5IGNvbG9yIGFscGhhIGluIHZhcmlhYmxlIDlcclxuICAtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTk6IGhzbGEoXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1saWdodCksXHJcbiAgICAwLjlcclxuICApO1xyXG5cclxuICAvLyBzZWNvbmRyeSBjb2xvciByb3RhdGVkIHVzaW5nIGNhbGMgMjBcclxuICAtLXJvdGF0ZWQtc2Vjb25kcnktY29sb3ItMjA6IGhzbChcclxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktaHVlKSAtIDIwKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktbGlnaHQpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDEwJVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0xMDogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyAxMCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDE1JVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0xNTogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyAxNSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDIwJVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0yMDogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyAyMCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDI1JVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0yNTogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyAyNSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDMwJVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0zMDogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyAzMCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDM1JVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0zNTogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyAzNSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDQwJVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi00MDogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyA0MCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDQ1JVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi00NTogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyA0NSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgbGlnaHRlbiB1c2luZyBjYWxjIDUwJVxyXG4gIC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi01MDogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgKyA1MCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgMTAlXHJcbiAgLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMTA6IGhzbChcclxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpIC0gMTAlKVxyXG4gICk7XHJcblxyXG4gIC8vIHNlY29uZHJ5IGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDE1JVxyXG4gIC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTE1OiBoc2woXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXNlY29uZHJ5LWxpZ2h0KSAtIDE1JSlcclxuICApO1xyXG5cclxuICAvLyBzZWNvbmRyeSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyAyMCVcclxuICAtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi0yMDogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgLSAyMCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgMjUlXHJcbiAgLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMjU6IGhzbChcclxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpIC0gMjUlKVxyXG4gICk7XHJcblxyXG4gIC8vIHNlY29uZHJ5IGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDMwJVxyXG4gIC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTMwOiBoc2woXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXNlY29uZHJ5LWxpZ2h0KSAtIDMwJSlcclxuICApO1xyXG5cclxuICAvLyBzZWNvbmRyeSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyAzNSVcclxuICAtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi0zNTogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgLSAzNSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gc2Vjb25kcnkgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgNDAlXHJcbiAgLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tNDA6IGhzbChcclxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpIC0gNDAlKVxyXG4gICk7XHJcblxyXG4gIC8vIHNlY29uZHJ5IGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDQ1JVxyXG4gIC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTQ1OiBoc2woXHJcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxyXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXNlY29uZHJ5LWxpZ2h0KSAtIDQ1JSlcclxuICApO1xyXG5cclxuICAvLyBzZWNvbmRyeSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyA1MCVcclxuICAtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi01MDogaHNsKFxyXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcclxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgLSA1MCUpXHJcbiAgKTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvLyB3aGl0ZSBjb2xvciB1c2luZyBIU0xcclxuICAtLXdoaXRlLWh1ZTogMDtcclxuICAtLXdoaXRlLXNhdHVyYXRpb246IDAlO1xyXG4gIC0td2hpdGUtbGlnaHQ6IDEwMCU7XHJcblxyXG4gIC8vIHdoaXRlIGNvbG9yIGluIHZhcmlhYmxlXHJcbiAgLS13aGl0ZS1jb2xvcjogaHNsKFxyXG4gICAgdmFyKC0td2hpdGUtaHVlKSxcclxuICAgIHZhcigtLXdoaXRlLXNhdHVyYXRpb24pLFxyXG4gICAgdmFyKC0td2hpdGUtbGlnaHQpXHJcbiAgKTtcclxuXHJcbiAgLy8gd2hpdGUgY29sb3IgYWxwaGEgaW4gdmFyaWFibGUgMlxyXG4gIC0tYWxwaGEtd2hpdGUtY29sb3ItMjogaHNsYShcclxuICAgIHZhcigtLXdoaXRlLWh1ZSksXHJcbiAgICB2YXIoLS13aGl0ZS1zYXR1cmF0aW9uKSxcclxuICAgIHZhcigtLXdoaXRlLWxpZ2h0KSxcclxuICAgIDAuMlxyXG4gICk7XHJcblxyXG4gIC8vIHdoaXRlIGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDEwJVxyXG4gIC0td2hpdGUtY29sb3ItZGFya2VuLTEwOiBoc2woXHJcbiAgICB2YXIoLS13aGl0ZS1odWUpLFxyXG4gICAgdmFyKC0td2hpdGUtc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXdoaXRlLWxpZ2h0KSAtIDEwJSlcclxuICApO1xyXG5cclxuICAvLyB3aGl0ZSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyAxNSVcclxuICAtLXdoaXRlLWNvbG9yLWRhcmtlbi0xNTogaHNsKFxyXG4gICAgdmFyKC0td2hpdGUtaHVlKSxcclxuICAgIHZhcigtLXdoaXRlLXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS13aGl0ZS1saWdodCkgLSAxNSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gd2hpdGUgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgMjAlXHJcbiAgLS13aGl0ZS1jb2xvci1kYXJrZW4tMjA6IGhzbChcclxuICAgIHZhcigtLXdoaXRlLWh1ZSksXHJcbiAgICB2YXIoLS13aGl0ZS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0td2hpdGUtbGlnaHQpIC0gMjAlKVxyXG4gICk7XHJcblxyXG4gIC8vIHdoaXRlIGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDI1JVxyXG4gIC0td2hpdGUtY29sb3ItZGFya2VuLTI1OiBoc2woXHJcbiAgICB2YXIoLS13aGl0ZS1odWUpLFxyXG4gICAgdmFyKC0td2hpdGUtc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXdoaXRlLWxpZ2h0KSAtIDI1JSlcclxuICApO1xyXG5cclxuICAvLyB3aGl0ZSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyAzMCVcclxuICAtLXdoaXRlLWNvbG9yLWRhcmtlbi0zMDogaHNsKFxyXG4gICAgdmFyKC0td2hpdGUtaHVlKSxcclxuICAgIHZhcigtLXdoaXRlLXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS13aGl0ZS1saWdodCkgLSAzMCUpXHJcbiAgKTtcclxuXHJcbiAgLy8gd2hpdGUgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgMzUlXHJcbiAgLS13aGl0ZS1jb2xvci1kYXJrZW4tMzU6IGhzbChcclxuICAgIHZhcigtLXdoaXRlLWh1ZSksXHJcbiAgICB2YXIoLS13aGl0ZS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0td2hpdGUtbGlnaHQpIC0gMzUlKVxyXG4gICk7XHJcblxyXG4gIC8vIHdoaXRlIGNvbG9yIGRhcmtlbiB1c2luZyBjYWxjIDQwJVxyXG4gIC0td2hpdGUtY29sb3ItZGFya2VuLTQwOiBoc2woXHJcbiAgICB2YXIoLS13aGl0ZS1odWUpLFxyXG4gICAgdmFyKC0td2hpdGUtc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLXdoaXRlLWxpZ2h0KSAtIDQwJSlcclxuICApO1xyXG5cclxuICAvLyB3aGl0ZSBjb2xvciBkYXJrZW4gdXNpbmcgY2FsYyA0NSVcclxuICAtLXdoaXRlLWNvbG9yLWRhcmtlbi00NTogaHNsKFxyXG4gICAgdmFyKC0td2hpdGUtaHVlKSxcclxuICAgIHZhcigtLXdoaXRlLXNhdHVyYXRpb24pLFxyXG4gICAgY2FsYyh2YXIoLS13aGl0ZS1saWdodCkgLSA0NSUpXHJcbiAgKTtcclxuXHJcbiAgLy8gd2hpdGUgY29sb3IgZGFya2VuIHVzaW5nIGNhbGMgNTAlXHJcbiAgLS13aGl0ZS1jb2xvci1kYXJrZW4tNTA6IGhzbChcclxuICAgIHZhcigtLXdoaXRlLWh1ZSksXHJcbiAgICB2YXIoLS13aGl0ZS1zYXR1cmF0aW9uKSxcclxuICAgIGNhbGModmFyKC0td2hpdGUtbGlnaHQpIC0gNTAlKVxyXG4gICk7XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLy8gYmxhY2sgY29sb3IgdXNpbmcgSFNMXHJcbiAgLS1ibGFjay1odWU6IDA7XHJcbiAgLS1ibGFjay1zYXR1cmF0aW9uOiAwJTtcclxuICAtLWJsYWNrLWxpZ2h0OiAwJTtcclxuXHJcbiAgLy8gYmxhY2sgY29sb3IgaW4gdmFyaWFibGVcclxuICAtLWJsYWNrLWNvbG9yOiBoc2woXHJcbiAgICB2YXIoLS1ibGFjay1odWUpLFxyXG4gICAgdmFyKC0tYmxhY2stc2F0dXJhdGlvbiksXHJcbiAgICB2YXIoLS1ibGFjay1saWdodClcclxuICApO1xyXG5cclxuICAvLyBibGFjayBjb2xvciBsaWdodGVuIHVzaW5nIGNhbGMgMTAlXHJcbiAgLS1ibGFjay1jb2xvci1saWdodGVuLTEwOiBoc2woXHJcbiAgICB2YXIoLS1ibGFjay1odWUpLFxyXG4gICAgdmFyKC0tYmxhY2stc2F0dXJhdGlvbiksXHJcbiAgICBjYWxjKHZhcigtLWJsYWNrLWxpZ2h0KSArIDEwJSlcclxuICApO1xyXG59XHJcblxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIGNvbG9yc1xyXG4kcHJpbWFyeTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiRvcGFjaXR5LXByaW1hcnktMTogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci0xKTtcclxuJG9wYWNpdHktcHJpbWFyeS0yOiB2YXIoLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTIpO1xyXG4kb3BhY2l0eS1wcmltYXJ5LTM6IHZhcigtLWFscGhhLXByaW1hcnktY29sb3ItMyk7XHJcbiRvcGFjaXR5LXByaW1hcnktNDogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci00KTtcclxuJG9wYWNpdHktcHJpbWFyeS01OiB2YXIoLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTUpO1xyXG4kb3BhY2l0eS1wcmltYXJ5LTY6IHZhcigtLWFscGhhLXByaW1hcnktY29sb3ItNik7XHJcbiRvcGFjaXR5LXByaW1hcnktNzogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci03KTtcclxuJG9wYWNpdHktcHJpbWFyeS04OiB2YXIoLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTgpO1xyXG4kb3BhY2l0eS1wcmltYXJ5LTk6IHZhcigtLWFscGhhLXByaW1hcnktY29sb3ItOSk7XHJcblxyXG4kcm90YXRlZC1wcmltYXJ5LTIwOiB2YXIoLS1yb3RhdGVkLXByaW1hcnktY29sb3ItMjApO1xyXG5cclxuJHByaW1hcnktbGlnaGVyLTU6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHRlbi01KTtcclxuJHByaW1hcnktbGlnaGVyLTEwOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tMTApO1xyXG4kcHJpbWFyeS1saWdoZXItMTU6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHRlbi0xNSk7XHJcbiRwcmltYXJ5LWxpZ2hlci0yMDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTIwKTtcclxuJHByaW1hcnktbGlnaGVyLTI1OiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tMjUpO1xyXG4kcHJpbWFyeS1saWdoZXItMzA6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHRlbi0zMCk7XHJcbiRwcmltYXJ5LWxpZ2hlci0zNTogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTM1KTtcclxuJHByaW1hcnktbGlnaGVyLTQwOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tNDApO1xyXG4kcHJpbWFyeS1saWdoZXItNDU6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHRlbi00NSk7XHJcbiRwcmltYXJ5LWxpZ2hlci01MDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTUwKTtcclxuXHJcbiRwcmltYXJ5LWRhcmtlci01OiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi01KTtcclxuJHByaW1hcnktZGFya2VyLTEwOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi0xMCk7XHJcbiRwcmltYXJ5LWRhcmtlci0xNTogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tMTUpO1xyXG4kcHJpbWFyeS1kYXJrZXItMjA6IHZhcigtLXByaW1hcnktY29sb3ItZGFya2VuLTIwKTtcclxuJHByaW1hcnktZGFya2VyLTI1OiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi0yNSk7XHJcbiRwcmltYXJ5LWRhcmtlci0zMDogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tMzApO1xyXG4kcHJpbWFyeS1kYXJrZXItMzU6IHZhcigtLXByaW1hcnktY29sb3ItZGFya2VuLTM1KTtcclxuJHByaW1hcnktZGFya2VyLTQwOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi00MCk7XHJcbiRwcmltYXJ5LWRhcmtlci00NTogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tNDUpO1xyXG4kcHJpbWFyeS1kYXJrZXItNTA6IHZhcigtLXByaW1hcnktY29sb3ItZGFya2VuLTUwKTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiRzZWNvbmRyeTogdmFyKC0tc2Vjb25kcnktY29sb3IpO1xyXG4kb3BhY2l0eS1zZWNvbmRyeS0xOiB2YXIoLS1hbHBoYS1zZWNvbmRyeS1jb2xvci0xKTtcclxuJG9wYWNpdHktc2Vjb25kcnktMjogdmFyKC0tYWxwaGEtc2Vjb25kcnktY29sb3ItMik7XHJcbiRvcGFjaXR5LXNlY29uZHJ5LTM6IHZhcigtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTMpO1xyXG4kb3BhY2l0eS1zZWNvbmRyeS00OiB2YXIoLS1hbHBoYS1zZWNvbmRyeS1jb2xvci00KTtcclxuJG9wYWNpdHktc2Vjb25kcnktNTogdmFyKC0tYWxwaGEtc2Vjb25kcnktY29sb3ItNSk7XHJcbiRvcGFjaXR5LXNlY29uZHJ5LTY6IHZhcigtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTYpO1xyXG4kb3BhY2l0eS1zZWNvbmRyeS03OiB2YXIoLS1hbHBoYS1zZWNvbmRyeS1jb2xvci03KTtcclxuJG9wYWNpdHktc2Vjb25kcnktODogdmFyKC0tYWxwaGEtc2Vjb25kcnktY29sb3ItOCk7XHJcbiRvcGFjaXR5LXNlY29uZHJ5LTk6IHZhcigtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTkpO1xyXG5cclxuJHJvdGF0ZWQtc2Vjb25kcnktMjA6IHZhcigtLXJvdGF0ZWQtc2Vjb25kcnktY29sb3ItMjApO1xyXG4kc2Vjb25kcnktbGlnaGVyLTEwOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1saWdodGVuLTEwKTtcclxuJHNlY29uZHJ5LWxpZ2hlci0xNTogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0xNSk7XHJcbiRzZWNvbmRyeS1saWdoZXItMjA6IHZhcigtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tMjApO1xyXG4kc2Vjb25kcnktbGlnaGVyLTI1OiB2YXIoLS1zZWNvbmRyeS1jb2xvci1saWdodGVuLTI1KTtcclxuJHNlY29uZHJ5LWxpZ2hlci0zMDogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0zMCk7XHJcbiRzZWNvbmRyeS1saWdoZXItMzU6IHZhcigtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tMzUpO1xyXG4kc2Vjb25kcnktbGlnaGVyLTQwOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1saWdodGVuLTQwKTtcclxuJHNlY29uZHJ5LWxpZ2hlci00NTogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi00NSk7XHJcbiRzZWNvbmRyeS1saWdoZXItNTA6IHZhcigtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tNTApO1xyXG4kc2Vjb25kcnktZGFya2VyLTEwOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMTApO1xyXG4kc2Vjb25kcnktZGFya2VyLTE1OiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMTUpO1xyXG4kc2Vjb25kcnktZGFya2VyLTIwOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMjApO1xyXG4kc2Vjb25kcnktZGFya2VyLTI1OiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMjUpO1xyXG4kc2Vjb25kcnktZGFya2VyLTMwOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMzApO1xyXG4kc2Vjb25kcnktZGFya2VyLTM1OiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMzUpO1xyXG4kc2Vjb25kcnktZGFya2VyLTQwOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tNDApO1xyXG4kc2Vjb25kcnktZGFya2VyLTQ1OiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tNDUpO1xyXG4kc2Vjb25kcnktZGFya2VyLTUwOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tNTApO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuJHdoaXRlOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiRvcGFjaXR5LXdoaXRlLTI6IHZhcigtLWFscGhhLXdoaXRlLWNvbG9yLTIpO1xyXG4kd2hpdGUtZGFya2VyLTEwOiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tMTApO1xyXG4kd2hpdGUtZGFya2VyLTE1OiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tMTUpO1xyXG4kd2hpdGUtZGFya2VyLTIwOiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tMjApO1xyXG4kd2hpdGUtZGFya2VyLTI1OiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tMjUpO1xyXG4kd2hpdGUtZGFya2VyLTMwOiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tMzApO1xyXG4kd2hpdGUtZGFya2VyLTM1OiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tMzUpO1xyXG4kd2hpdGUtZGFya2VyLTQwOiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tNDApO1xyXG4kd2hpdGUtZGFya2VyLTQ1OiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tNDUpO1xyXG4kd2hpdGUtZGFya2VyLTUwOiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tNTApO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuJGJsYWNrOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiRibGFjay1saWdoZXItMTA6IHZhcigtLWJsYWNrLWNvbG9yLWxpZ2h0ZW4tMTApO1xyXG5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBpbmhhbmNlZCBzbmlwcGV0c1xyXG5cclxuLy8gcHJpbWFyeVxyXG4udGV4dC1wcmltYXJ5IHtcclxuICBjb2xvcjogJHByaW1hcnk7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxufVxyXG5cclxuLmJnLW9wYWNpdHktcHJpbWFyeS0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3BhY2l0eS1wcmltYXJ5LTE7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXByaW1hcnktMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9wYWNpdHktcHJpbWFyeS0yO1xyXG59XHJcblxyXG4uYmctb3BhY2l0eS1wcmltYXJ5LTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXByaW1hcnktMztcclxufVxyXG5cclxuLmJnLW9wYWNpdHktcHJpbWFyeS00IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3BhY2l0eS1wcmltYXJ5LTQ7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXByaW1hcnktNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9wYWNpdHktcHJpbWFyeS01O1xyXG59XHJcblxyXG4uYmctb3BhY2l0eS1wcmltYXJ5LTYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXByaW1hcnktNjtcclxufVxyXG5cclxuLmJnLW9wYWNpdHktcHJpbWFyeS03IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3BhY2l0eS1wcmltYXJ5LTc7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXByaW1hcnktOCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9wYWNpdHktcHJpbWFyeS04O1xyXG59XHJcblxyXG4uYmctb3BhY2l0eS1wcmltYXJ5LTkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXByaW1hcnktOTtcclxufVxyXG5cclxuLmJnLXJvdGF0ZWQtcHJpbWFyeS0yMCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHJvdGF0ZWQtcHJpbWFyeS0yMDtcclxufVxyXG5cclxuLmJnLXByaW1hcnktbGlnaHRlci01IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1saWdoZXItNTtcclxufVxyXG5cclxuLmJnLXByaW1hcnktbGlnaHRlci0xMCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGlnaGVyLTEwO1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1saWdodGVyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1saWdoZXItMTU7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5LWxpZ2h0ZXItMjAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpZ2hlci0yMDtcclxufVxyXG5cclxuLmJnLXByaW1hcnktbGlnaHRlci0yNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGlnaGVyLTI1O1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1saWdodGVyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1saWdoZXItMzA7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5LWxpZ2h0ZXItMzUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpZ2hlci0zNTtcclxufVxyXG5cclxuLmJnLXByaW1hcnktbGlnaHRlci00MCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktbGlnaGVyLTQwO1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1saWdodGVyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1saWdoZXItNDU7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5LWxpZ2h0ZXItNTAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpZ2hlci01MDtcclxufVxyXG5cclxuLmJnLXByaW1hcnktZGFya2VyLTUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcmtlci01O1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1kYXJrZXItMTAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcmtlci0xMDtcclxufVxyXG5cclxuLmJnLXByaW1hcnktZGFya2VyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrZXItMTU7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5LWRhcmtlci0yMCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGFya2VyLTIwO1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1kYXJrZXItMjUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcmtlci0yNTtcclxufVxyXG5cclxuLmJnLXByaW1hcnktZGFya2VyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrZXItMzA7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5LWRhcmtlci0zNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGFya2VyLTM1O1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1kYXJrZXItNDAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcmtlci00MDtcclxufVxyXG5cclxuLmJnLXByaW1hcnktZGFya2VyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1kYXJrZXItNDU7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5LWRhcmtlci01MCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktZGFya2VyLTUwO1xyXG59XHJcblxyXG4vLyBzZWNvbmRyeVxyXG4udGV4dC1zZWNvbmRyeSB7XHJcbiAgY29sb3I6ICRzZWNvbmRyeTtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kcnk7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTE7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTI7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTM7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTQ7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTU7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTY7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTc7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTg7XHJcbn1cclxuXHJcbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcGFjaXR5LXNlY29uZHJ5LTk7XHJcbn1cclxuXHJcbi5iZy1yb3RhdGVkLXNlY29uZHJ5LTIwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcm90YXRlZC1zZWNvbmRyeS0yMDtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWxpZ2h0ZXItMTAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRyeS1saWdoZXItMTA7XHJcbn1cclxuXHJcbi5iZy1zZWNvbmRyeS1saWdodGVyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kcnktbGlnaGVyLTE1O1xyXG59XHJcblxyXG4uYmctc2Vjb25kcnktbGlnaHRlci0yMCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWxpZ2hlci0yMDtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWxpZ2h0ZXItMjUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRyeS1saWdoZXItMjU7XHJcbn1cclxuXHJcbi5iZy1zZWNvbmRyeS1saWdodGVyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kcnktbGlnaGVyLTMwO1xyXG59XHJcblxyXG4uYmctc2Vjb25kcnktbGlnaHRlci0zNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWxpZ2hlci0zNTtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWxpZ2h0ZXItNDAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRyeS1saWdoZXItNDA7XHJcbn1cclxuXHJcbi5iZy1zZWNvbmRyeS1saWdodGVyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kcnktbGlnaGVyLTQ1O1xyXG59XHJcblxyXG4uYmctc2Vjb25kcnktbGlnaHRlci01MCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWxpZ2hlci01MDtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci0xMCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci0xMDtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci0xNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci0xNTtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci0yMCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci0yMDtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci0yNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci0yNTtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci0zMCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci0zMDtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci0zNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci0zNTtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci00MCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci00MDtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci00NSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci00NTtcclxufVxyXG5cclxuLmJnLXNlY29uZHJ5LWRhcmtlci01MCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZHJ5LWRhcmtlci01MDtcclxufVxyXG5cclxuLy8gd2hpdGVcclxuLnRleHQtd2hpdGUge1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG4uYmctb3BhY2l0eS13aGl0ZS0yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3BhY2l0eS13aGl0ZS0yO1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTEwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTEwO1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTE1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTE1O1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTIwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTIwO1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTI1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTI1O1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTMwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTMwO1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTM1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTM1O1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTQwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTQwO1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTQ1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTQ1O1xyXG59XHJcblxyXG4uYmctd2hpdGUtZGFya2VyLTUwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZGFya2VyLTUwO1xyXG59XHJcblxyXG4vLyBibGFja1xyXG4udGV4dC1ibGFjayB7XHJcbiAgY29sb3I6ICRibGFjaztcclxufVxyXG5cclxuLmJnLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbn1cclxuXHJcbi8vICRwcmltYXJ5LWNvbG9yOiAjZGY3OTYwO1xyXG4vLyAvLyAkcHJpbWFyeS1jb2xvcjogI2U5NzkxZTtcclxuLy8gJHNlY29uZHJ5LWNvbG9yOiAjODJiMjlhO1xyXG4vLyAkZGVmYXVsdC1jb2xvcjogIzNjNDA1YjtcclxuLy8gJHRoaXJkLWNvbG9yOiAjZjRmMWRlO1xyXG4vLyAkZm91cmQteWVsbG93OiAjZjJjYzhlO1xyXG5cclxuJGluZm86ICMwMGJjZDQgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAjZmY5ODAwICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAjZjQ0MzM2ICFkZWZhdWx0O1xyXG4vLyAkc3VjY2VzczogIzRjYWY1MCAhZGVmYXVsdDtcclxuJHN1Y2Nlc3M6ICMwMGQzMjkgIWRlZmF1bHQ7XHJcbiRyb3NlOiAjZTkxZTYzICFkZWZhdWx0O1xyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBlbjtcclxufVxyXG5cclxuLy8gd2lkdGhcclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuLy8gVHJhY2tcclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG59XHJcblxyXG4vLyBIYW5kbGVcclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlLWRhcmtlci0zNTtcclxufVxyXG5cclxuLy8gSGFuZGxlIG9uIGhvdmVyXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG59XHJcbiIsImh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC0tcHJpbWFyeS1odWU6IDQzO1xuICAtLXByaW1hcnktc2F0dXJhdGlvbjogMTAwJTtcbiAgLS1wcmltYXJ5LWxpZ2h0OiA1MCU7XG4gIC0tcHJpbWFyeS1jb2xvcjogaHNsKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXByaW1hcnktbGlnaHQpXG4gICk7XG4gIC0tYWxwaGEtcHJpbWFyeS1jb2xvci0xOiBoc2xhKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXByaW1hcnktbGlnaHQpLFxuICAgIDAuMVxuICApO1xuICAtLWFscGhhLXByaW1hcnktY29sb3ItMjogaHNsYShcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1wcmltYXJ5LWxpZ2h0KSxcbiAgICAwLjJcbiAgKTtcbiAgLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTM6IGhzbGEoXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgdmFyKC0tcHJpbWFyeS1saWdodCksXG4gICAgMC4zXG4gICk7XG4gIC0tYWxwaGEtcHJpbWFyeS1jb2xvci00OiBoc2xhKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXByaW1hcnktbGlnaHQpLFxuICAgIDAuNFxuICApO1xuICAtLWFscGhhLXByaW1hcnktY29sb3ItNTogaHNsYShcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1wcmltYXJ5LWxpZ2h0KSxcbiAgICAwLjVcbiAgKTtcbiAgLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTY6IGhzbGEoXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgdmFyKC0tcHJpbWFyeS1saWdodCksXG4gICAgMC42XG4gICk7XG4gIC0tYWxwaGEtcHJpbWFyeS1jb2xvci03OiBoc2xhKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXByaW1hcnktbGlnaHQpLFxuICAgIDAuN1xuICApO1xuICAtLWFscGhhLXByaW1hcnktY29sb3ItODogaHNsYShcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1wcmltYXJ5LWxpZ2h0KSxcbiAgICAwLjhcbiAgKTtcbiAgLS1hbHBoYS1wcmltYXJ5LWNvbG9yLTk6IGhzbGEoXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgdmFyKC0tcHJpbWFyeS1saWdodCksXG4gICAgMC45XG4gICk7XG4gIC0tcm90YXRlZC1wcmltYXJ5LWNvbG9yLTIwOiBoc2woXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWh1ZSkgLSAyMCksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1wcmltYXJ5LWxpZ2h0KVxuICApO1xuICAtLXByaW1hcnktY29sb3ItbGlnaHRlbi01OiBoc2woXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSArIDUlKVxuICApO1xuICAtLXByaW1hcnktY29sb3ItbGlnaHRlbi0xMDogaHNsKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgKyAxMCUpXG4gICk7XG4gIC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTE1OiBoc2woXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSArIDE1JSlcbiAgKTtcbiAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tMjA6IGhzbChcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpICsgMjAlKVxuICApO1xuICAtLXByaW1hcnktY29sb3ItbGlnaHRlbi0yNTogaHNsKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgKyAyNSUpXG4gICk7XG4gIC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTMwOiBoc2woXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSArIDMwJSlcbiAgKTtcbiAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tMzU6IGhzbChcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpICsgMzUlKVxuICApO1xuICAtLXByaW1hcnktY29sb3ItbGlnaHRlbi00MDogaHNsKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgKyA0MCUpXG4gICk7XG4gIC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTQ1OiBoc2woXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSArIDQ1JSlcbiAgKTtcbiAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tNTA6IGhzbChcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpICsgNTAlKVxuICApO1xuICAtLXByaW1hcnktY29sb3ItZGFya2VuLTU6IGhzbChcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpIC0gNSUpXG4gICk7XG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tMTA6IGhzbChcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpIC0gMTAlKVxuICApO1xuICAtLXByaW1hcnktY29sb3ItZGFya2VuLTE1OiBoc2woXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSAtIDE1JSlcbiAgKTtcbiAgLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi0yMDogaHNsKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgLSAyMCUpXG4gICk7XG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tMjU6IGhzbChcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpIC0gMjUlKVxuICApO1xuICAtLXByaW1hcnktY29sb3ItZGFya2VuLTMwOiBoc2woXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSAtIDMwJSlcbiAgKTtcbiAgLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi0zNTogaHNsKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgLSAzNSUpXG4gICk7XG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tNDA6IGhzbChcbiAgICB2YXIoLS1wcmltYXJ5LWh1ZSksXG4gICAgdmFyKC0tcHJpbWFyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXByaW1hcnktbGlnaHQpIC0gNDAlKVxuICApO1xuICAtLXByaW1hcnktY29sb3ItZGFya2VuLTQ1OiBoc2woXG4gICAgdmFyKC0tcHJpbWFyeS1odWUpLFxuICAgIHZhcigtLXByaW1hcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1wcmltYXJ5LWxpZ2h0KSAtIDQ1JSlcbiAgKTtcbiAgLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi01MDogaHNsKFxuICAgIHZhcigtLXByaW1hcnktaHVlKSxcbiAgICB2YXIoLS1wcmltYXJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tcHJpbWFyeS1saWdodCkgLSA1MCUpXG4gICk7XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC0tc2Vjb25kcnktaHVlOiAxODU7XG4gIC0tc2Vjb25kcnktc2F0dXJhdGlvbjogMTAwJTtcbiAgLS1zZWNvbmRyeS1saWdodDogNTAlO1xuICAtLXNlY29uZHJ5LWNvbG9yOiBoc2woXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1saWdodClcbiAgKTtcbiAgLS1hbHBoYS1zZWNvbmRyeS1jb2xvci0xOiBoc2xhKFxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXG4gICAgdmFyKC0tc2Vjb25kcnktbGlnaHQpLFxuICAgIDAuMVxuICApO1xuICAtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTI6IGhzbGEoXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1saWdodCksXG4gICAgMC4yXG4gICk7XG4gIC0tYWxwaGEtc2Vjb25kcnktY29sb3ItMzogaHNsYShcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXNlY29uZHJ5LWxpZ2h0KSxcbiAgICAwLjNcbiAgKTtcbiAgLS1hbHBoYS1zZWNvbmRyeS1jb2xvci00OiBoc2xhKFxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXG4gICAgdmFyKC0tc2Vjb25kcnktbGlnaHQpLFxuICAgIDAuNFxuICApO1xuICAtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTU6IGhzbGEoXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1saWdodCksXG4gICAgMC41XG4gICk7XG4gIC0tYWxwaGEtc2Vjb25kcnktY29sb3ItNjogaHNsYShcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXNlY29uZHJ5LWxpZ2h0KSxcbiAgICAwLjZcbiAgKTtcbiAgLS1hbHBoYS1zZWNvbmRyeS1jb2xvci03OiBoc2xhKFxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXG4gICAgdmFyKC0tc2Vjb25kcnktbGlnaHQpLFxuICAgIDAuN1xuICApO1xuICAtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTg6IGhzbGEoXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1saWdodCksXG4gICAgMC44XG4gICk7XG4gIC0tYWxwaGEtc2Vjb25kcnktY29sb3ItOTogaHNsYShcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXNlY29uZHJ5LWxpZ2h0KSxcbiAgICAwLjlcbiAgKTtcbiAgLS1yb3RhdGVkLXNlY29uZHJ5LWNvbG9yLTIwOiBoc2woXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1odWUpIC0gMjApLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXNlY29uZHJ5LWxpZ2h0KVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tMTA6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgMTAlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tMTU6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgMTUlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tMjA6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgMjAlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tMjU6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgMjUlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tMzA6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgMzAlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tMzU6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgMzUlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tNDA6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgNDAlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tNDU6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgNDUlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWxpZ2h0ZW4tNTA6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpICsgNTAlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi0xMDogaHNsKFxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgLSAxMCUpXG4gICk7XG4gIC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTE1OiBoc2woXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXNlY29uZHJ5LWxpZ2h0KSAtIDE1JSlcbiAgKTtcbiAgLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMjA6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpIC0gMjAlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi0yNTogaHNsKFxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgLSAyNSUpXG4gICk7XG4gIC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTMwOiBoc2woXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXNlY29uZHJ5LWxpZ2h0KSAtIDMwJSlcbiAgKTtcbiAgLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMzU6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpIC0gMzUlKVxuICApO1xuICAtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi00MDogaHNsKFxuICAgIHZhcigtLXNlY29uZHJ5LWh1ZSksXG4gICAgdmFyKC0tc2Vjb25kcnktc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS1zZWNvbmRyeS1saWdodCkgLSA0MCUpXG4gICk7XG4gIC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTQ1OiBoc2woXG4gICAgdmFyKC0tc2Vjb25kcnktaHVlKSxcbiAgICB2YXIoLS1zZWNvbmRyeS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXNlY29uZHJ5LWxpZ2h0KSAtIDQ1JSlcbiAgKTtcbiAgLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tNTA6IGhzbChcbiAgICB2YXIoLS1zZWNvbmRyeS1odWUpLFxuICAgIHZhcigtLXNlY29uZHJ5LXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0tc2Vjb25kcnktbGlnaHQpIC0gNTAlKVxuICApO1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAtLXdoaXRlLWh1ZTogMDtcbiAgLS13aGl0ZS1zYXR1cmF0aW9uOiAwJTtcbiAgLS13aGl0ZS1saWdodDogMTAwJTtcbiAgLS13aGl0ZS1jb2xvcjogaHNsKFxuICAgIHZhcigtLXdoaXRlLWh1ZSksXG4gICAgdmFyKC0td2hpdGUtc2F0dXJhdGlvbiksXG4gICAgdmFyKC0td2hpdGUtbGlnaHQpXG4gICk7XG4gIC0tYWxwaGEtd2hpdGUtY29sb3ItMjogaHNsYShcbiAgICB2YXIoLS13aGl0ZS1odWUpLFxuICAgIHZhcigtLXdoaXRlLXNhdHVyYXRpb24pLFxuICAgIHZhcigtLXdoaXRlLWxpZ2h0KSxcbiAgICAwLjJcbiAgKTtcbiAgLS13aGl0ZS1jb2xvci1kYXJrZW4tMTA6IGhzbChcbiAgICB2YXIoLS13aGl0ZS1odWUpLFxuICAgIHZhcigtLXdoaXRlLXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0td2hpdGUtbGlnaHQpIC0gMTAlKVxuICApO1xuICAtLXdoaXRlLWNvbG9yLWRhcmtlbi0xNTogaHNsKFxuICAgIHZhcigtLXdoaXRlLWh1ZSksXG4gICAgdmFyKC0td2hpdGUtc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS13aGl0ZS1saWdodCkgLSAxNSUpXG4gICk7XG4gIC0td2hpdGUtY29sb3ItZGFya2VuLTIwOiBoc2woXG4gICAgdmFyKC0td2hpdGUtaHVlKSxcbiAgICB2YXIoLS13aGl0ZS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXdoaXRlLWxpZ2h0KSAtIDIwJSlcbiAgKTtcbiAgLS13aGl0ZS1jb2xvci1kYXJrZW4tMjU6IGhzbChcbiAgICB2YXIoLS13aGl0ZS1odWUpLFxuICAgIHZhcigtLXdoaXRlLXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0td2hpdGUtbGlnaHQpIC0gMjUlKVxuICApO1xuICAtLXdoaXRlLWNvbG9yLWRhcmtlbi0zMDogaHNsKFxuICAgIHZhcigtLXdoaXRlLWh1ZSksXG4gICAgdmFyKC0td2hpdGUtc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS13aGl0ZS1saWdodCkgLSAzMCUpXG4gICk7XG4gIC0td2hpdGUtY29sb3ItZGFya2VuLTM1OiBoc2woXG4gICAgdmFyKC0td2hpdGUtaHVlKSxcbiAgICB2YXIoLS13aGl0ZS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXdoaXRlLWxpZ2h0KSAtIDM1JSlcbiAgKTtcbiAgLS13aGl0ZS1jb2xvci1kYXJrZW4tNDA6IGhzbChcbiAgICB2YXIoLS13aGl0ZS1odWUpLFxuICAgIHZhcigtLXdoaXRlLXNhdHVyYXRpb24pLFxuICAgIGNhbGModmFyKC0td2hpdGUtbGlnaHQpIC0gNDAlKVxuICApO1xuICAtLXdoaXRlLWNvbG9yLWRhcmtlbi00NTogaHNsKFxuICAgIHZhcigtLXdoaXRlLWh1ZSksXG4gICAgdmFyKC0td2hpdGUtc2F0dXJhdGlvbiksXG4gICAgY2FsYyh2YXIoLS13aGl0ZS1saWdodCkgLSA0NSUpXG4gICk7XG4gIC0td2hpdGUtY29sb3ItZGFya2VuLTUwOiBoc2woXG4gICAgdmFyKC0td2hpdGUtaHVlKSxcbiAgICB2YXIoLS13aGl0ZS1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLXdoaXRlLWxpZ2h0KSAtIDUwJSlcbiAgKTtcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLS1ibGFjay1odWU6IDA7XG4gIC0tYmxhY2stc2F0dXJhdGlvbjogMCU7XG4gIC0tYmxhY2stbGlnaHQ6IDAlO1xuICAtLWJsYWNrLWNvbG9yOiBoc2woXG4gICAgdmFyKC0tYmxhY2staHVlKSxcbiAgICB2YXIoLS1ibGFjay1zYXR1cmF0aW9uKSxcbiAgICB2YXIoLS1ibGFjay1saWdodClcbiAgKTtcbiAgLS1ibGFjay1jb2xvci1saWdodGVuLTEwOiBoc2woXG4gICAgdmFyKC0tYmxhY2staHVlKSxcbiAgICB2YXIoLS1ibGFjay1zYXR1cmF0aW9uKSxcbiAgICBjYWxjKHZhcigtLWJsYWNrLWxpZ2h0KSArIDEwJSlcbiAgKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci0xKTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci0yKTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci0zKTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci00KTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci01KTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci02KTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS03IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci03KTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS04IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci04KTtcbn1cblxuLmJnLW9wYWNpdHktcHJpbWFyeS05IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtcHJpbWFyeS1jb2xvci05KTtcbn1cblxuLmJnLXJvdGF0ZWQtcHJpbWFyeS0yMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvdGF0ZWQtcHJpbWFyeS1jb2xvci0yMCk7XG59XG5cbi5iZy1wcmltYXJ5LWxpZ2h0ZXItNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHRlbi01KTtcbn1cblxuLmJnLXByaW1hcnktbGlnaHRlci0xMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHRlbi0xMCk7XG59XG5cbi5iZy1wcmltYXJ5LWxpZ2h0ZXItMTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tMTUpO1xufVxuXG4uYmctcHJpbWFyeS1saWdodGVyLTIwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTIwKTtcbn1cblxuLmJnLXByaW1hcnktbGlnaHRlci0yNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHRlbi0yNSk7XG59XG5cbi5iZy1wcmltYXJ5LWxpZ2h0ZXItMzAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tMzApO1xufVxuXG4uYmctcHJpbWFyeS1saWdodGVyLTM1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTM1KTtcbn1cblxuLmJnLXByaW1hcnktbGlnaHRlci00MCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHRlbi00MCk7XG59XG5cbi5iZy1wcmltYXJ5LWxpZ2h0ZXItNDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0ZW4tNDUpO1xufVxuXG4uYmctcHJpbWFyeS1saWdodGVyLTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodGVuLTUwKTtcbn1cblxuLmJnLXByaW1hcnktZGFya2VyLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi01KTtcbn1cblxuLmJnLXByaW1hcnktZGFya2VyLTEwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tMTApO1xufVxuXG4uYmctcHJpbWFyeS1kYXJrZXItMTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi0xNSk7XG59XG5cbi5iZy1wcmltYXJ5LWRhcmtlci0yMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFya2VuLTIwKTtcbn1cblxuLmJnLXByaW1hcnktZGFya2VyLTI1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tMjUpO1xufVxuXG4uYmctcHJpbWFyeS1kYXJrZXItMzAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi0zMCk7XG59XG5cbi5iZy1wcmltYXJ5LWRhcmtlci0zNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFya2VuLTM1KTtcbn1cblxuLmJnLXByaW1hcnktZGFya2VyLTQwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrZW4tNDApO1xufVxuXG4uYmctcHJpbWFyeS1kYXJrZXItNDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmtlbi00NSk7XG59XG5cbi5iZy1wcmltYXJ5LWRhcmtlci01MCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFya2VuLTUwKTtcbn1cblxuLnRleHQtc2Vjb25kcnkge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3IpO1xufVxuXG4uYmctc2Vjb25kcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRyeS1jb2xvcik7XG59XG5cbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHBoYS1zZWNvbmRyeS1jb2xvci0xKTtcbn1cblxuLmJnLW9wYWNpdHktc2Vjb25kcnktMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTIpO1xufVxuXG4uYmctb3BhY2l0eS1zZWNvbmRyeS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtc2Vjb25kcnktY29sb3ItMyk7XG59XG5cbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHBoYS1zZWNvbmRyeS1jb2xvci00KTtcbn1cblxuLmJnLW9wYWNpdHktc2Vjb25kcnktNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTUpO1xufVxuXG4uYmctb3BhY2l0eS1zZWNvbmRyeS02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtc2Vjb25kcnktY29sb3ItNik7XG59XG5cbi5iZy1vcGFjaXR5LXNlY29uZHJ5LTcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHBoYS1zZWNvbmRyeS1jb2xvci03KTtcbn1cblxuLmJnLW9wYWNpdHktc2Vjb25kcnktOCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFscGhhLXNlY29uZHJ5LWNvbG9yLTgpO1xufVxuXG4uYmctb3BhY2l0eS1zZWNvbmRyeS05IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtc2Vjb25kcnktY29sb3ItOSk7XG59XG5cbi5iZy1yb3RhdGVkLXNlY29uZHJ5LTIwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm90YXRlZC1zZWNvbmRyeS1jb2xvci0yMCk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTEwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0xMCk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTE1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0xNSk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTIwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0yMCk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTI1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0yNSk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTMwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0zMCk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTM1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi0zNSk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTQwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi00MCk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTQ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi00NSk7XG59XG5cbi5iZy1zZWNvbmRyeS1saWdodGVyLTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItbGlnaHRlbi01MCk7XG59XG5cbi5iZy1zZWNvbmRyeS1kYXJrZXItMTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMTApO1xufVxuXG4uYmctc2Vjb25kcnktZGFya2VyLTE1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTE1KTtcbn1cblxuLmJnLXNlY29uZHJ5LWRhcmtlci0yMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi0yMCk7XG59XG5cbi5iZy1zZWNvbmRyeS1kYXJrZXItMjUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tMjUpO1xufVxuXG4uYmctc2Vjb25kcnktZGFya2VyLTMwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTMwKTtcbn1cblxuLmJnLXNlY29uZHJ5LWRhcmtlci0zNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi0zNSk7XG59XG5cbi5iZy1zZWNvbmRyeS1kYXJrZXItNDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRyeS1jb2xvci1kYXJrZW4tNDApO1xufVxuXG4uYmctc2Vjb25kcnktZGFya2VyLTQ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kcnktY29sb3ItZGFya2VuLTQ1KTtcbn1cblxuLmJnLXNlY29uZHJ5LWRhcmtlci01MCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZHJ5LWNvbG9yLWRhcmtlbi01MCk7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xufVxuXG4uYmctb3BhY2l0eS13aGl0ZS0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxwaGEtd2hpdGUtY29sb3ItMik7XG59XG5cbi5iZy13aGl0ZS1kYXJrZXItMTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tMTApO1xufVxuXG4uYmctd2hpdGUtZGFya2VyLTE1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3ItZGFya2VuLTE1KTtcbn1cblxuLmJnLXdoaXRlLWRhcmtlci0yMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yLWRhcmtlbi0yMCk7XG59XG5cbi5iZy13aGl0ZS1kYXJrZXItMjUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tMjUpO1xufVxuXG4uYmctd2hpdGUtZGFya2VyLTMwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3ItZGFya2VuLTMwKTtcbn1cblxuLmJnLXdoaXRlLWRhcmtlci0zNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yLWRhcmtlbi0zNSk7XG59XG5cbi5iZy13aGl0ZS1kYXJrZXItNDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvci1kYXJrZW4tNDApO1xufVxuXG4uYmctd2hpdGUtZGFya2VyLTQ1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3ItZGFya2VuLTQ1KTtcbn1cblxuLmJnLXdoaXRlLWRhcmtlci01MCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yLWRhcmtlbi01MCk7XG59XG5cbi50ZXh0LWJsYWNrIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbn1cblxuLmJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IGVuO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNvbG9yKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNvbG9yLWRhcmtlbi0zNSk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cbnN2ZyAuc3QwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnN2ZyAuc3QxIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmaWxsOiBub25lO1xuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG59XG5zdmcgLnN0MiB7XG4gIGZpbGw6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBzdHJva2U6ICMwMDAwMDA7XG4gIHN0cm9rZS13aWR0aDogMTM7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbn1cbnN2ZyAuc3QzIHtcbiAgZmlsbDogI2ZmZmZmZjtcbiAgc3Ryb2tlOiAjMDAwMDAwO1xuICBzdHJva2Utd2lkdGg6IDEzO1xuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG59XG5zdmcgLnN0NCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzAwMDAwMDtcbiAgc3Ryb2tlLXdpZHRoOiAxMztcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xufVxuc3ZnIC5zdDUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICMwMDAwMDA7XG4gIHN0cm9rZS13aWR0aDogNi43NDc3O1xuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuc3ZnIHtcclxuICAuc3QwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zdDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcclxuICB9XHJcbiAgLnN0MiB7XHJcbiAgICBmaWxsOiAkcHJpbWFyeTtcclxuICAgIHN0cm9rZTogIzAwMDAwMDtcclxuICAgIHN0cm9rZS13aWR0aDogMTM7XHJcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XHJcbiAgfVxyXG4gIC5zdDMge1xyXG4gICAgZmlsbDogI2ZmZmZmZjtcclxuICAgIHN0cm9rZTogIzAwMDAwMDtcclxuICAgIHN0cm9rZS13aWR0aDogMTM7XHJcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XHJcbiAgfVxyXG4gIC5zdDQge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogIzAwMDAwMDtcclxuICAgIHN0cm9rZS13aWR0aDogMTM7XHJcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XHJcbiAgfVxyXG4gIC5zdDUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogIzAwMDAwMDtcclxuICAgIHN0cm9rZS13aWR0aDogNi43NDc3O1xyXG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-svg-logo',
          templateUrl: './svg-logo.component.html',
          styleUrls: ['./svg-logo.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/shared.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/shared/shared.module.ts ***!
    \****************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppComponentsSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_mydatepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-mydatepicker */
    "./node_modules/angular-mydatepicker/__ivy_ngcc__/fesm2015/angular-mydatepicker.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _components_svg_logo_svg_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/svg-logo/svg-logo.component */
    "./src/app/components/shared/components/svg-logo/svg-logo.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_3__["AngularMyDatePickerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_3__["AngularMyDatePickerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_svg_logo_svg_logo_component__WEBPACK_IMPORTED_MODULE_5__["SvgLogoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_3__["AngularMyDatePickerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
        exports: [_components_svg_logo_svg_logo_component__WEBPACK_IMPORTED_MODULE_5__["SvgLogoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_3__["AngularMyDatePickerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_svg_logo_svg_logo_component__WEBPACK_IMPORTED_MODULE_5__["SvgLogoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_3__["AngularMyDatePickerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
          exports: [_components_svg_logo_svg_logo_component__WEBPACK_IMPORTED_MODULE_5__["SvgLogoComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_mydatepicker__WEBPACK_IMPORTED_MODULE_3__["AngularMyDatePickerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Abdelrahman\Desktop\eng moataz\code\gitHub\p-delivery\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map