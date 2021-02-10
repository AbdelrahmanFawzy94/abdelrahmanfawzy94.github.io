(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "./src/app/@core/services/system/system.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/@core/services/system/system.service.ts ***!
  \*********************************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






// let httpHeaders = new HttpHeaders({
//   'Content-Type' : 'application/json'
// });
const options = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class SystemService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCountries() {
        return this.httpClient.get('country').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getCities(id) {
        const url = 'country/getCitiesByCountry/' + id.toString();
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    changeUserStatus(statusAction) {
        return this.httpClient
            .put('system/changeUserStatus', statusAction, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getVehicles() {
        return this.httpClient.get("system/vehicles").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getBoxTypes() {
        return this.httpClient.get("system/boxTypes").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getProductTypes() {
        return this.httpClient.get("request/productsTypes").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getPaymentTypes() {
        return this.httpClient.get("request/paymentTypes").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getCurrentSystemSettings() {
        return this.httpClient.get("system").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getcountriesPrices() {
        return this.httpClient.get("system/countriesPrices").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    addCountriesPrices(countryPrice) {
        return this.httpClient.post("system/countriesPrices", countryPrice, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getRejectPerTypes() {
        return this.httpClient.get("system/rejectPerTypes").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getIgnorePerTypes() {
        return this.httpClient.get("system/ignorePerTypes").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getPenaltyPerTypes() {
        return this.httpClient.get("system/penaltyPerTypes").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    saveConfigurations(settings) {
        return this.httpClient.post("system", settings, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
}
SystemService.ɵfac = function SystemService_Factory(t) { return new (t || SystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SystemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SystemService, factory: SystemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/charts/charts.component */ "./src/app/modules/dashboard/pages/charts/charts.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/modules/dashboard/pages/user/user.component.ts");
/* harmony import */ var _pages_admins_admins_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admins/admins.component */ "./src/app/modules/dashboard/pages/admins/admins.component.ts");








const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["SupportDashboardComponent"],
        children: [
            {
                path: '',
                component: _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"],
            },
            {
                path: 'profile',
                data: {
                    preload: true,
                },
                loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-module */ "pages-profile-profile-module").then(__webpack_require__.bind(null, /*! ./pages/#profile/profile.module */ "./src/app/modules/dashboard/pages/#profile/profile.module.ts")).then((m) => m.ProfileModule),
            },
            {
                path: 'user/:id/:type',
                component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
            },
            {
                path: 'admins',
                component: _pages_admins_admins_component__WEBPACK_IMPORTED_MODULE_5__["AdminsComponent"],
            },
            {
                path: 'new-order',
                data: {
                    preload: true,
                },
                loadChildren: () => Promise.all(/*! import() | pages-making-order-making-order-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-making-order-making-order-module")]).then(__webpack_require__.bind(null, /*! ./pages/making-order/making-order.module */ "./src/app/modules/dashboard/pages/making-order/making-order.module.ts")).then((m) => m.MakingOrderModule),
            },
            {
                path: 'orders',
                data: {
                    preload: true,
                },
                loadChildren: () => Promise.all(/*! import() | pages-orders-orders-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-orders-orders-module")]).then(__webpack_require__.bind(null, /*! ./pages/orders/orders.module */ "./src/app/modules/dashboard/pages/orders/orders.module.ts")).then((m) => m.OrdersModule),
            },
            {
                path: 'order/:id',
                data: {
                    preload: true,
                },
                loadChildren: () => Promise.all(/*! import() | pages-order-order-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-order-order-module")]).then(__webpack_require__.bind(null, /*! ./pages/order/order.module */ "./src/app/modules/dashboard/pages/order/order.module.ts")).then((m) => m.OrderModule),
            },
        ],
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: SupportDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportDashboardComponent", function() { return SupportDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/models/data-objects */ "./src/app/@core/models/data-objects.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/loader.service */ "./src/app/modules/shared/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/services/auth/auth.service */ "./src/app/@core/services/auth/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_svg_logo_svg_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/svg-logo/svg-logo.component */ "./src/app/modules/shared/components/svg-logo/svg-logo.component.ts");
/* harmony import */ var _shared_components_general_loading_general_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/general-loading/general-loading.component */ "./src/app/modules/shared/components/general-loading/general-loading.component.ts");











const _c0 = ["container"];
const _c1 = ["menu"];
function SupportDashboardComponent_app_general_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-general-loading");
} }
const _c2 = function () { return ["profile"]; };
const _c3 = function () { return ["./"]; };
const _c4 = function () { return ["new-order"]; };
const _c5 = function () { return ["orders"]; };
class SupportDashboardComponent {
    constructor(loader, router, pageTitle, authService, translate) {
        this.loader = loader;
        this.router = router;
        this.pageTitle = pageTitle;
        this.authService = authService;
        this.translate = translate;
        this.hideTitle = true;
        this.showLoader = false;
        this.showLangMenu = false;
        this.currentLang = '';
        this.currentFlag = '../../../../assets/images/en.jpg';
        this.closedNav = true;
        this.openUserMenu = false;
        this.scrolled = false;
        this.currentPage = '';
        this.loggedUser = new _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["AgentUser"]();
    }
    ngOnInit() {
        this.loader.showLoader$.subscribe((boolen) => {
            this.showLoader = boolen;
        });
        this.loggedUser = this.authService.getLoggedUser();
        // need to inhance later
        let localStorageLang;
        if (localStorage.getItem('lang')) {
            localStorageLang = localStorage.getItem('lang');
            this.translate.use(localStorageLang).subscribe((lang) => {
                if (localStorageLang === 'ar') {
                    document.body.classList.add('rtl');
                    this.currentLang = 'ar';
                    this.currentFlag = '../../../../assets/images/ar.jpg';
                }
                else {
                    document.body.classList.remove('rtl');
                    this.currentLang = 'en';
                    this.currentFlag = '../../../../assets/images/en.jpg';
                }
            });
        }
    }
    ngAfterViewInit() {
        this.subMenuInit();
        this.fixedNavTop();
    }
    ngAfterViewChecked() {
        // this.closeSidenavMenus();
        this.getCurrentPage();
    }
    // end of life cycle hooks
    toggleNav() {
        this.closedNav = !this.closedNav;
        if (this.closedNav === true) {
            this.openUserMenu = false;
            this.closeSidenavMenus();
        }
        this.scrollToTop();
    }
    toggleLang() {
        this.showLangMenu = !this.showLangMenu;
    }
    changeLang(e) {
        const elemnt = e.target;
        this.translate.use(elemnt.id).subscribe((data) => {
            this.currentLang = elemnt.id;
            if (this.translate.currentLang === 'ar') {
                document.body.classList.add('rtl');
                this.hideTitle = true;
                this.currentFlag = '../../../../assets/images/ar.jpg';
                localStorage.setItem('lang', 'ar');
            }
            else {
                document.body.classList.remove('rtl');
                this.hideTitle = false;
                this.currentFlag = '../../../../assets/images/en.jpg';
                localStorage.setItem('lang', 'en');
            }
        });
    }
    openNav() {
        this.closedNav = false;
        this.scrollToTop();
    }
    toggleUserMenu() {
        this.openUserMenu = !this.openUserMenu;
    }
    toggleNotification(e) {
        const element = e.target;
        const menu = element.nextElementSibling.nextElementSibling;
        menu.classList.toggle('active');
    }
    closeNotification(e) {
        console.log(e);
    }
    closeSidenavMenus() {
        if (this.closedNav === true) {
            this.sidenavLinks.forEach((link) => {
                if (link.classList.contains('active')) {
                    link.classList.remove('active');
                }
            });
        }
    }
    navigateToDashboard() {
        this.router.navigateByUrl('dashboard');
    }
    getCurrentPage() {
        const url = this.router.url;
        const urlArray = url.split('/');
        const indexOfPath = urlArray.length - 1;
        this.currentPage = urlArray[indexOfPath];
        if (this.currentPage.includes('-')) {
            this.currentPage = this.currentPage.replace('-', ' ');
        }
        this.pageTitle.setTitle(this.currentPage);
    }
    subMenuInit() {
        this.sidenavLinks = Array.from(this.menu.nativeElement.children);
        this.sidenavLinks.forEach((li) => {
            li.onclick = () => {
                this.sidenavLinks.forEach((item) => item.classList.remove('active'));
                li.classList.toggle('active');
            };
            // console.log(li);
            // console.log(li.children[li.children.length - 1]);
        });
    }
    fixedNavTop() {
        this.container.nativeElement.onscroll = () => {
            if (this.container.nativeElement.scrollTop === 0) {
                this.scrolled = false;
            }
            else {
                this.scrolled = true;
            }
        };
    }
    scrollToTop() {
        this.container.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
    logout() {
        localStorage.clear();
        this.router.navigateByUrl('/');
    }
}
SupportDashboardComponent.ɵfac = function SupportDashboardComponent_Factory(t) { return new (t || SupportDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
SupportDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportDashboardComponent, selectors: [["app-dashboard"]], viewQuery: function SupportDashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, decls: 83, vars: 49, consts: [[4, "ngIf"], [1, "layout", "container-fluid", "p-0"], [1, "side-nav", 3, "click"], [1, "overlay"], [1, "logo", 3, "click"], ["href", ""], [1, "user", 3, "click"], [1, "img"], ["src", "../../../assets/images/user.png", "alt", "", 1, "user-img"], [1, "user-name"], ["userMenu", ""], [1, "user-menu-item", 3, "routerLink"], [1, "fal", "fa-user-alt"], [1, "user-menu-item", "danger", 3, "click"], [1, "fal", "fa-power-off"], [1, "menu"], [1, "primary-menu"], ["menu", ""], [1, "primary-link", "active"], [1, "link-element", 3, "routerLink"], [1, "icon"], [1, "fad", "fa-th-large"], [1, "primary-link"], [1, "link-element", "dropper"], [1, "fas", "fa-people-carry"], [1, "sub-menu"], [1, "sub-links", 3, "routerLink"], [1, "fas", "fa-box-open"], [1, "dashboard"], [1, "top-nav"], [1, "left-nav"], [1, "menu-toggler", 3, "click"], [1, "far", "fa-ellipsis-v", 3, "hidden"], [1, "far", "fa-list-ul", 3, "hidden"], [1, "right-nav"], [1, "icons"], [1, "lang-container"], [1, "current-lang", 3, "click"], ["alt", "", 3, "src"], ["id", "en", 3, "click"], ["src", "../../../../assets/images/en.jpg", "alt", ""], ["id", "ar", 3, "click"], ["src", "../../../../assets/images/ar.jpg", "alt", ""], [1, "container-fluid", "content"], ["container", ""]], template: function SupportDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SupportDashboardComponent_app_general_loading_0_Template, 1, 0, "app-general-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportDashboardComponent_Template_nav_click_2_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportDashboardComponent_Template_div_click_4_listener() { return ctx.navigateToDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-svg-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "sender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportDashboardComponent_Template_div_click_9_listener() { return ctx.toggleUserMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportDashboardComponent_Template_li_click_21_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nav", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportDashboardComponent_Template_button_click_59_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportDashboardComponent_Template_div_click_67_listener() { return ctx.toggleLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportDashboardComponent_Template_li_click_72_listener($event) { ctx.changeLang($event); return ctx.toggleLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "english");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportDashboardComponent_Template_li_click_76_listener($event) { ctx.changeLang($event); return ctx.toggleLang(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", ctx.closedNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.openUserMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loggedUser.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.openUserMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 33, "dashboard.profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 35, "dashboard.logout"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx.openUserMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 37, "dashboard.dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 39, "dashboard.orders"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 41, "dashboard.newOrder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 43, "dashboard.allOrders"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed-sidenav", ctx.closedNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrolled", ctx.scrolled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.closedNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.closedNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentFlag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentLang === "ar" ? "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "english");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.showLangMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_svg_logo_svg_logo_component__WEBPACK_IMPORTED_MODULE_8__["SvgLogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_components_general_loading_general_loading_component__WEBPACK_IMPORTED_MODULE_9__["GeneralLoadingComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: sans-serif;\n  background-color: #f2f2f2;\n}\nbody.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\nbody.rtl[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  left: unset !important;\n  right: 16px;\n}\nbody.rtl[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  right: unset !important;\n  left: 0;\n}\nbody.rtl[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   .link-element.dropper[_ngcontent-%COMP%]::after {\n  right: unset !important;\n  left: 12px;\n}\nbody.rtl[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul.icon-menu[_ngcontent-%COMP%] {\n  right: unset !important;\n  left: 0;\n}\nbody.rtl[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   label.out[_ngcontent-%COMP%] {\n  transform: translateX(-40px) !important;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\nmat-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmat-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #e5e5e5;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #df7960;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #3c405b;\n}\n.animated-scaling[_ngcontent-%COMP%] {\n  -webkit-animation: scaling 0.7s ease-out;\n          animation: scaling 0.7s ease-out;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes fadeInTop {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes fadeInTop {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@-webkit-keyframes fadeInBottom {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@keyframes fadeInBottom {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes scaling {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes scaling {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 100vh;\n  overflow: hidden;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100vh;\n  background-image: url('sidenav.jpg');\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  transition: 0.3s;\n  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.layout[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%] {\n  width: 90px;\n}\n@media (max-width: 500px) {\n  .layout[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%] {\n    width: 0;\n  }\n}\n.layout[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.layout[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  display: none;\n}\n.layout[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.user-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.layout[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .primary-menu[_ngcontent-%COMP%]   .primary-link[_ngcontent-%COMP%]   .link-element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.layout[_ngcontent-%COMP%]   .side-nav.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .primary-menu[_ngcontent-%COMP%]   .primary-link[_ngcontent-%COMP%]   .link-element.dropper[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 15px;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 65px;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  pointer-events: none;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  margin: 0 8px;\n  text-transform: uppercase;\n  transition: 0.2s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #df7960;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 15px 0;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  background-color: #9b9b9b;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  background-color: #9b9b9b;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: 0.4s;\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .img.active[_ngcontent-%COMP%] {\n  background-color: #00bcd4;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  width: 40px;\n  margin: 0 10px;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: capitalize;\n  pointer-events: none;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  height: 0px;\n  overflow: hidden;\n  transition: 0.4s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   ul.open[_ngcontent-%COMP%] {\n  height: 83.2px;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.user-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: 0.4s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.user-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.user-menu-item.danger[_ngcontent-%COMP%]:hover {\n  background-color: #f44336;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.user-menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  width: 60px;\n  display: flex;\n  justify-content: center;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.user-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  cursor: unset;\n  pointer-events: none;\n  text-transform: capitalize;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  height: calc(100% - 155px);\n  overflow: hidden;\n  transition: 0.4s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu.responsive[_ngcontent-%COMP%] {\n  height: calc(100% - 239px);\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  height: 100%;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link.active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 188, 212, 0.3);\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link.active[_ngcontent-%COMP%]   .dropper[_ngcontent-%COMP%] {\n  zoom: unset;\n  background-color: #00bcd4;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link.active[_ngcontent-%COMP%]   .dropper[_ngcontent-%COMP%]::after {\n  top: 15px !important;\n  transform: rotate(0deg) scaleX(1.7) scaleY(0.9) !important;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link.active[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   .link-element[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 3px;\n  position: relative;\n  outline: none;\n  transition: 0.3s;\n  -webkit-animation: fadeIn 1s;\n          animation: fadeIn 1s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   .link-element[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   .link-element.dropper[_ngcontent-%COMP%]::after {\n  content: \"^\";\n  color: #fff;\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  transform: rotate(-180deg) scaleX(1.7) scaleY(0.9);\n  transition: 0.2s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   .link-element.dropper[_ngcontent-%COMP%]:hover {\n  background-color: #00bcd4;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   .link-element[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 60px;\n  display: flex;\n  justify-content: center;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   .link-element[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   .link-element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  text-transform: capitalize;\n  cursor: unset;\n  pointer-events: none;\n  width: calc(100% - 60px);\n  text-align: initial;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: none;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li.sub-links[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 3px;\n  position: relative;\n  outline: none;\n  transition: 0.3s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li.sub-links[_ngcontent-%COMP%]:nth-of-type(2n) {\n  -webkit-animation: fadeInLeft 0.75s;\n          animation: fadeInLeft 0.75s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li.sub-links[_ngcontent-%COMP%]:nth-of-type(2n-1) {\n  -webkit-animation: fadeInRight 0.75s;\n          animation: fadeInRight 0.75s;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li.sub-links[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li.sub-links[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 60px;\n  display: flex;\n  justify-content: center;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li.sub-links[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n}\n.layout[_ngcontent-%COMP%]   .side-nav[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.primary-menu[_ngcontent-%COMP%]   li.primary-link[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li.sub-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  text-transform: capitalize;\n  cursor: unset;\n  pointer-events: none;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%] {\n  transition: width 0.3s;\n  width: calc(100% - 260px);\n  height: 100%;\n}\n.layout[_ngcontent-%COMP%]   .dashboard.collapsed-sidenav[_ngcontent-%COMP%] {\n  width: calc(100% - 90px);\n}\n@media (max-width: 500px) {\n  .layout[_ngcontent-%COMP%]   .dashboard.collapsed-sidenav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  position: relative;\n  z-index: 200;\n  transition: 0.5s;\n}\n@media (max-width: 700px) {\n  .layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav.scrolled[_ngcontent-%COMP%] {\n  box-shadow: -20px 0px 38px -12px rgba(0, 0, 0, 0.56), -3px 0px 25px 0 rgba(0, 0, 0, 0.12), -4px -1px 10px -5px rgba(0, 0, 0, 0.2);\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%]   .menu-toggler[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: #3c405b;\n  box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.25);\n  border-radius: 50%;\n  width: 41px;\n  height: 41px;\n  line-height: 44px;\n  outline: none;\n  transition: 0.2s ease-out;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%]   .menu-toggler[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%]   .menu-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #878787;\n  text-transform: capitalize;\n  font-size: 18px;\n  margin: 0 15px;\n}\n@media (max-width: 650px) {\n  .layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .left-nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%] {\n  zoom: unset;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   .current-lang[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   .current-lang[_ngcontent-%COMP%]:hover {\n  background-color: #e6e6e6;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   .current-lang[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  margin: 0 5px;\n  pointer-events: none;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   .current-lang[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  pointer-events: none;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  background-color: #fff;\n  min-width: 120px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: 0.3s;\n  opacity: 0;\n  transform: scale(0);\n  transform-origin: top;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   ul.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transform-origin: top;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 6px 10px 6px 10px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #e6e6e6;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  margin: 0 5px;\n  pointer-events: none;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .lang-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  pointer-events: none;\n  display: inline-block;\n  width: 55px;\n  text-align: initial;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #444;\n  cursor: pointer;\n  transition: 0.1s;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  pointer-events: none;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul.icon-menu[_ngcontent-%COMP%] {\n  width: 250px;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  padding: 12px 0;\n  background-color: #fff;\n  margin: 0;\n  list-style-type: none;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  opacity: 0;\n  transform-origin: top;\n  pointer-events: none;\n  transform: translateY(10px);\n  transition: 0.5s;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul.icon-menu.active[_ngcontent-%COMP%] {\n  pointer-events: unset;\n  opacity: 1;\n  transform: translateY(0px);\n  z-index: 10;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul.icon-menu[_ngcontent-%COMP%]   li.link[_ngcontent-%COMP%] {\n  display: block;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul.icon-menu[_ngcontent-%COMP%]   li.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: calc(100% - 16px);\n  padding: 10px 24px;\n  text-decoration: none;\n  color: #666;\n  transition: 0.4s;\n  white-space: nowrap;\n  margin: 0 auto;\n  border-radius: 3px;\n  overflow: hidden;\n  font-size: 13px;\n  text-align: initial;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .top-nav[_ngcontent-%COMP%]   .right-nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ul.icon-menu[_ngcontent-%COMP%]   li.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #df7960;\n  color: #fff;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25), 0 7px 10px -5px rgba(0, 0, 0, 0.55);\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 30px 15px;\n  height: calc(100% - 60px);\n  position: relative;\n  overflow-y: scroll;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .content.nav-opened[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .dismiss-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.layout[_ngcontent-%COMP%]   .dashboard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .dismiss-overlay.dismiss-mode[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxBYmRlbHJhaG1hblxcRGVza3RvcFxcZW5nIG1vYXRhelxcY29kZVxcZ2l0bGFiXFxzZW5kZXItYWdlbnQvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9DOlxcVXNlcnNcXEFiZGVscmFobWFuXFxEZXNrdG9wXFxlbmcgbW9hdGF6XFxjb2RlXFxnaXRsYWJcXHNlbmRlci1hZ2VudC9zcmNcXGFwcFxcbW9kdWxlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFxQkE7O0VBRUUsWUFBQTtBQ25CRjtBRHNCQTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQVZRO0FDVFY7QURxQkU7RUFDRSxjQUFBO0FDbkJKO0FEcUJJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FDbkJOO0FEc0JJO0VBQ0UsdUJBQUE7RUFDQSxPQUFBO0FDcEJOO0FEdUJJO0VBT0UsdUJBQUE7RUFDQSxVQUFBO0FDM0JOO0FEOEJJO0VBQ0UsdUJBQUE7RUFDQSxPQUFBO0FDNUJOO0FEK0JJO0VBQ0UsdUNBQUE7QUM3Qk47QURrQ0E7O0VBRUUsWUFBQTtBQy9CRjtBRGlDQTtFQUNFLFNBQUE7RUFDQSxpREFBQTtBQzlCRjtBRGlDQTtFQUNFLGVBQUE7QUM5QkY7QURrQ0U7RUFDRSxnQkFBQTtBQy9CSjtBRG1DQSxVQUFBO0FBQ0E7RUFDRSxVQUFBO0FDaENGO0FEbUNBLFVBQUE7QUFDQTtFQUNFLG1CQUFBO0FDaENGO0FEbUNBLFdBQUE7QUFDQTtFQUNFLG1CQS9GYztBQytEaEI7QURtQ0Esb0JBQUE7QUFDQTtFQUNFLG1CQWpHYztBQ2lFaEI7QURxQ0E7RUFDRSx3Q0FBQTtVQUFBLGdDQUFBO0FDbENGO0FEcUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EscUJBQUE7RUNsQ0Y7RURvQ0E7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNsQ0Y7QUFDRjtBRDBCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0VDbENGO0VEb0NBO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VDbENGO0FBQ0Y7QURxQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQ25DRjtFRHFDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQ25DRjtBQUNGO0FEMkJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUNuQ0Y7RURxQ0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUNuQ0Y7QUFDRjtBRHNDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VDcENGO0VEc0NBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDcENGO0FBQ0Y7QUQ0QkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQ3BDRjtFRHNDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQ3BDRjtBQUNGO0FEdUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUNyQ0Y7RUR1Q0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUNyQ0Y7QUFDRjtBRDZCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VDckNGO0VEdUNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VDckNGO0FBQ0Y7QUR3Q0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQ3RDRjtFRHdDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQ3RDRjtBQUNGO0FEOEJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUN0Q0Y7RUR3Q0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUN0Q0Y7QUFDRjtBRHlDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VDdkNGO0VEeUNBO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VDdkNGO0FBQ0Y7QUQrQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ3ZDRjtFRHlDQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ3ZDRjtBQUNGO0FDdElBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUR3SUY7QUNySUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1SEFBQTtBRHVJSjtBQ3BJSTtFQUNFLFdBQUE7QURzSU47QUNwSU07RUFIRjtJQUlJLFFBQUE7RUR1SU47QUFDRjtBQ3BJUTtFQUNFLGFBQUE7QURzSVY7QUNoSVU7RUFDRSxhQUFBO0FEa0laO0FDN0hZO0VBQ0Usd0JBQUE7QUQrSGQ7QUNySGM7RUFDRSx3QkFBQTtBRHVIaEI7QUNwSFk7RUFDRSx3QkFBQTtBRHNIZDtBQy9HSTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QURpSE47QUMvR007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QURpSFI7QUMvR1E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBRGlIVjtBQy9HVTtFQUNFLFdGbEVKO0VFbUVJLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBRGlIWjtBQzdHUTtFQUNFLGNGMUZNO0FDeU1oQjtBQzNHTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRDZHUjtBQzNHUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBRDZHVjtBQzFHUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBRDRHVjtBQ3pHUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUQyR1Y7QUN6R1U7RUFDRSxxQ0FBQTtBRDJHWjtBQ3hHVTtFQUNFLHlCRjdITDtBQ3VPUDtBQ3ZHVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRHlHWjtBQ3RHVTtFQUNFLFdGaElKO0VFaUlJLDBCQUFBO0VBQ0Esb0JBQUE7QUR3R1o7QUNwR1E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURzR1Y7QUNwR1U7RUFDRSxjQUFBO0FEc0daO0FDbkdVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEcUdaO0FDbkdZO0VBQ0UsMENBQUE7QURxR2Q7QUNqR2M7RUFDRSx5QkZ0S1A7QUN5UVQ7QUMvRlk7RUFDRSxXRnJLTjtFRXNLTSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBRGlHZDtBQzlGWTtFQUNFLGNBQUE7RUFDQSxXRjlLTjtFRStLTSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FEZ0dkO0FDMUZNO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FENEZSO0FDMUZRO0VBQ0UsMEJBQUE7QUQ0RlY7QUNyRlE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBRHVGVjtBQ3JGVTtFQUNFLGdCQUFBO0FEdUZaO0FDckZZO0VBQ0Usd0NBQUE7QUR1RmQ7QUNyRmM7RUFDRSxXQUFBO0VBQ0EseUJGM05UO0FDa1RQO0FDckZnQjtFQUNFLG9CQUFBO0VBQ0EsMERBQUE7QUR1RmxCO0FDbkZjO0VBQ0UseUJBQUE7QURxRmhCO0FDakZZO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBRG1GZDtBQ2pGYztFQUNFLDBDQUFBO0FEbUZoQjtBQy9FZ0I7RUFDRSxZQUFBO0VBQ0EsV0ZsUFY7RUVtUFUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7QURpRmxCO0FDOUVnQjtFQUNFLHlCRm5RWDtBQ21WUDtBQzVFYztFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUQ4RWhCO0FDNUVnQjtFQUNFLFdGclFWO0VFc1FVLGVBQUE7QUQ4RWxCO0FDMUVjO0VBQ0UsV0YzUVI7RUU0UVEscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUQ0RWhCO0FDeEVZO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUQwRWQ7QUN4RWM7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUQwRWhCO0FDeEVnQjtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUQwRWxCO0FDdkVnQjtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUR5RWxCO0FDdEVnQjtFQUNFLDBDQUFBO0FEd0VsQjtBQ3JFZ0I7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FEdUVsQjtBQ3JFa0I7RUFDRSxXRnZUWjtFRXdUWSxlQUFBO0FEdUVwQjtBQ25FZ0I7RUFDRSxXRjdUVjtFRThUVSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FEcUVsQjtBQzNERTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FENkRKO0FDM0RJO0VBQ0Usd0JBQUE7QUQ2RE47QUMzRE07RUFIRjtJQUlJLFdBQUE7RUQ4RE47QUFDRjtBQzNESTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRDZETjtBQzNETTtFQVZGO0lBV0ksZUFBQTtFRDhETjtBQUNGO0FDNURNO0VBQ0UsaUlBQUE7QUQ4RFI7QUN6RE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRDJEUjtBQ3pEUTtFQUNFLFNBQUE7RUFDQSx5QkYvWE07RUVnWU4saUlBQUE7RUFHQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUR5RFY7QUN2RFU7RUFDRSxtSUFBQTtBRHlEWjtBQ3BEVTtFQUNFLGVBQUE7RUFDQSxXRnRZSjtBQzRiUjtBQ2xEUTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEb0RWO0FDbERVO0VBTkY7SUFPSSxhQUFBO0VEcURWO0FBQ0Y7QUNqRE07RUFDRSxXQUFBO0FEbURSO0FDakRRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FEbURWO0FDakRVO0VBQ0Usa0JBQUE7QURtRFo7QUNqRFk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEbURkO0FDakRjO0VBQ0UseUJBQUE7QURtRGhCO0FDaERjO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRGtEaEI7QUMvQ2M7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0FEaURoQjtBQzdDWTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JGbmNOO0VFb2NNLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FEK0NkO0FDN0NjO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUQrQ2hCO0FDNUNjO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEOENoQjtBQzVDZ0I7RUFDRSx5QkFBQTtBRDhDbEI7QUMzQ2dCO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRDZDbEI7QUMxQ2dCO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FENENsQjtBQ3RDVTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRHdDWjtBQ3RDWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEd0NkO0FDdENjO0VBQ0UscUJBQUE7QUR3Q2hCO0FDcENZO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FEc0NkO0FDbkNZO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JGNWdCTjtFRTZnQk0sU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FEcUNkO0FDbkNjO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FEcUNoQjtBQ2xDYztFQUNFLGNBQUE7QURvQ2hCO0FDbENnQjtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEb0NsQjtBQ2xDa0I7RUFDRSx5QkZoa0JKO0VFaWtCSSxXRmxqQlo7RUVtakJZLGlGQUFBO0FEb0NwQjtBQ3pCSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEMkJOO0FDekJNO0VBQ0UsZ0JBQUE7QUQyQlI7QUN4Qk07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBRDBCUjtBQ3hCUTtFQUNFLGNBQUE7QUQwQlY7QUNqQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFRG9CRjtFQ2xCQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFRG9CRjtBQUNGO0FDakJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RURtQkY7RUNqQkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RURtQkY7QUFDRjtBQ2hCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VEa0JGO0VDaEJBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VEa0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG4kcHJpbWFyeS1jb2xvcjogI2RmNzk2MDtcclxuLy8gJHByaW1hcnktY29sb3I6ICNlOTc5MWU7XHJcbiRzZWNvbmRyeS1jb2xvcjogIzgyYjI5YTtcclxuJGRlZmF1bHQtY29sb3I6ICMzYzQwNWI7XHJcbiR0aGlyZC1jb2xvcjogI2Y0ZjFkZTtcclxuJGZvdXJkLXllbGxvdzogI2YyY2M4ZTtcclxuXHJcbiRpbmZvOiAjMDBiY2Q0ICFkZWZhdWx0O1xyXG4kd2FybmluZzogI2ZmOTgwMCAhZGVmYXVsdDtcclxuJGRhbmdlcjogI2Y0NDMzNiAhZGVmYXVsdDtcclxuLy8gJHN1Y2Nlc3M6ICM0Y2FmNTAgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAjMDBkMzI5ICFkZWZhdWx0O1xyXG4kcm9zZTogI2U5MWU2MyAhZGVmYXVsdDtcclxuXHJcbiRibGFjazogIzAwMDtcclxuJHdoaXRlOiAjZmZmO1xyXG5cclxuJGJvZHktYmc6ICNmMmYyZjI7XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcclxuXHJcbiAgJi5ydGwge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcblxyXG4gICAgLmxvZ2luIC5sYWJlbCB7XHJcbiAgICAgIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IC5pY29ucyAubGFuZy1jb250YWluZXIgdWwge1xyXG4gICAgICByaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAubGF5b3V0XHJcbiAgICAgIC5zaWRlLW5hdlxyXG4gICAgICAub3ZlcmxheVxyXG4gICAgICAubWVudVxyXG4gICAgICB1bC5wcmltYXJ5LW1lbnVcclxuICAgICAgbGkucHJpbWFyeS1saW5rXHJcbiAgICAgIC5saW5rLWVsZW1lbnQuZHJvcHBlcjo6YWZ0ZXIge1xyXG4gICAgICByaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMgLmljb24gdWwuaWNvbi1tZW51IHtcclxuICAgICAgcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lci1mbHVpZCAub3ZlcmxheSAubG9naW4gLmZvcm0gLmZvcm0tZ3JvdXAgLmxhYmVsIGxhYmVsLm91dCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubWF0LXJvdyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5tYXQtY2VsbCB7XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJvZHktYmcsICRhbW91bnQ6IDUpO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAkZGVmYXVsdC1jb2xvcjtcclxufVxyXG5cclxuLy8gYW5pbWF0aW9uXHJcblxyXG4uYW5pbWF0ZWQtc2NhbGluZyB7XHJcbiAgYW5pbWF0aW9uOiBzY2FsaW5nIDAuN3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5Ub3Age1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluQm90dG9tIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxpbmcge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5ib2R5LnJ0bCB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuYm9keS5ydGwgLmxvZ2luIC5sYWJlbCB7XG4gIGxlZnQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxNnB4O1xufVxuYm9keS5ydGwgLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5yaWdodC1uYXYgLmljb25zIC5sYW5nLWNvbnRhaW5lciB1bCB7XG4gIHJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwO1xufVxuYm9keS5ydGwgLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLm1lbnUgdWwucHJpbWFyeS1tZW51IGxpLnByaW1hcnktbGluayAubGluay1lbGVtZW50LmRyb3BwZXI6OmFmdGVyIHtcbiAgcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEycHg7XG59XG5ib2R5LnJ0bCAubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMgLmljb24gdWwuaWNvbi1tZW51IHtcbiAgcmlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG59XG5ib2R5LnJ0bCAuY29udGFpbmVyLWZsdWlkIC5vdmVybGF5IC5sb2dpbiAuZm9ybSAuZm9ybS1ncm91cCAubGFiZWwgbGFiZWwub3V0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KSAhaW1wb3J0YW50O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5tYXQtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtY2VsbCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2RmNzk2MDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNjNDA1Yjtcbn1cblxuLmFuaW1hdGVkLXNjYWxpbmcge1xuICBhbmltYXRpb246IHNjYWxpbmcgMC43cyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblRvcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Cb3R0b20ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2NhbGluZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4ubGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxheW91dCAuc2lkZS1uYXYge1xuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2lkZW5hdi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm94LXNoYWRvdzogMCAxNnB4IDM4cHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjU2KSwgMCA0cHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubGF5b3V0IC5zaWRlLW5hdi5jb2xsYXBzZWQge1xuICB3aWR0aDogOTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAubGF5b3V0IC5zaWRlLW5hdi5jb2xsYXBzZWQge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG4ubGF5b3V0IC5zaWRlLW5hdi5jb2xsYXBzZWQgLmxvZ28gc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGF5b3V0IC5zaWRlLW5hdi5jb2xsYXBzZWQgLnVzZXIgLmltZyAudXNlci1uYW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sYXlvdXQgLnNpZGUtbmF2LmNvbGxhcHNlZCAudXNlciB1bCBsaS51c2VyLW1lbnUtaXRlbSBhIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmxheW91dCAuc2lkZS1uYXYuY29sbGFwc2VkIC5tZW51IC5wcmltYXJ5LW1lbnUgLnByaW1hcnktbGluayAubGluay1lbGVtZW50IGEge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubGF5b3V0IC5zaWRlLW5hdi5jb2xsYXBzZWQgLm1lbnUgLnByaW1hcnktbWVudSAucHJpbWFyeS1saW5rIC5saW5rLWVsZW1lbnQuZHJvcHBlcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGZhZGVJbiAxcztcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC5sb2dvIGEge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLmxvZ28gYSBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwIDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC5sb2dvOmhvdmVyIGEgc3BhbiB7XG4gIGNvbG9yOiAjZGY3OTYwO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLnVzZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLnVzZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YjliOWI7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAudXNlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLThweDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWI5YjliO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLnVzZXIgLmltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLnVzZXIgLmltZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAudXNlciAuaW1nLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAudXNlciAuaW1nIC51c2VyLWltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC51c2VyIC5pbWcgLnVzZXItbmFtZSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAudXNlciB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBoZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC51c2VyIHVsLm9wZW4ge1xuICBoZWlnaHQ6IDgzLjJweDtcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC51c2VyIHVsIGxpLnVzZXItbWVudS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC51c2VyIHVsIGxpLnVzZXItbWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLnVzZXIgdWwgbGkudXNlci1tZW51LWl0ZW0uZGFuZ2VyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC51c2VyIHVsIGxpLnVzZXItbWVudS1pdGVtIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAudXNlciB1bCBsaS51c2VyLW1lbnUtaXRlbSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogdW5zZXQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC5tZW51IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTVweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudS5yZXNwb25zaXZlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMzlweCk7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLm1lbnUgdWwucHJpbWFyeS1tZW51IGxpLnByaW1hcnktbGluayB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTg4LCAyMTIsIDAuMyk7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rLmFjdGl2ZSAuZHJvcHBlciB7XG4gIHpvb206IHVuc2V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLm1lbnUgdWwucHJpbWFyeS1tZW51IGxpLnByaW1hcnktbGluay5hY3RpdmUgLmRyb3BwZXI6OmFmdGVyIHtcbiAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlWCgxLjcpIHNjYWxlWSgwLjkpICFpbXBvcnRhbnQ7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rLmFjdGl2ZSB1bC5zdWItbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIC5saW5rLWVsZW1lbnQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLm1lbnUgdWwucHJpbWFyeS1tZW51IGxpLnByaW1hcnktbGluayAubGluay1lbGVtZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLm1lbnUgdWwucHJpbWFyeS1tZW51IGxpLnByaW1hcnktbGluayAubGluay1lbGVtZW50LmRyb3BwZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJeXCI7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZykgc2NhbGVYKDEuNykgc2NhbGVZKDAuOSk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIC5saW5rLWVsZW1lbnQuZHJvcHBlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIC5saW5rLWVsZW1lbnQgLmljb24ge1xuICB3aWR0aDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIC5saW5rLWVsZW1lbnQgLmljb24gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIC5saW5rLWVsZW1lbnQgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjdXJzb3I6IHVuc2V0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLm1lbnUgdWwucHJpbWFyeS1tZW51IGxpLnByaW1hcnktbGluayB1bC5zdWItbWVudSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLm1lbnUgdWwucHJpbWFyeS1tZW51IGxpLnByaW1hcnktbGluayB1bC5zdWItbWVudSBsaS5zdWItbGlua3Mge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIHVsLnN1Yi1tZW51IGxpLnN1Yi1saW5rczpudGgtb2YtdHlwZSgybikge1xuICBhbmltYXRpb246IGZhZGVJbkxlZnQgMC43NXM7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIHVsLnN1Yi1tZW51IGxpLnN1Yi1saW5rczpudGgtb2YtdHlwZSgybi0xKSB7XG4gIGFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC43NXM7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIHVsLnN1Yi1tZW51IGxpLnN1Yi1saW5rczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cbi5sYXlvdXQgLnNpZGUtbmF2IC5vdmVybGF5IC5tZW51IHVsLnByaW1hcnktbWVudSBsaS5wcmltYXJ5LWxpbmsgdWwuc3ViLW1lbnUgbGkuc3ViLWxpbmtzIC5pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxheW91dCAuc2lkZS1uYXYgLm92ZXJsYXkgLm1lbnUgdWwucHJpbWFyeS1tZW51IGxpLnByaW1hcnktbGluayB1bC5zdWItbWVudSBsaS5zdWItbGlua3MgLmljb24gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubGF5b3V0IC5zaWRlLW5hdiAub3ZlcmxheSAubWVudSB1bC5wcmltYXJ5LW1lbnUgbGkucHJpbWFyeS1saW5rIHVsLnN1Yi1tZW51IGxpLnN1Yi1saW5rcyBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGN1cnNvcjogdW5zZXQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI2MHB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxheW91dCAuZGFzaGJvYXJkLmNvbGxhcHNlZC1zaWRlbmF2IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5sYXlvdXQgLmRhc2hib2FyZC5jb2xsYXBzZWQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjAwO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYuc2Nyb2xsZWQge1xuICBib3gtc2hhZG93OiAtMjBweCAwcHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAtM3B4IDBweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgLTRweCAtMXB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLmxlZnQtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5sZWZ0LW5hdiAubWVudS10b2dnbGVyIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0MDViO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQxcHg7XG4gIGhlaWdodDogNDFweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLmxlZnQtbmF2IC5tZW51LXRvZ2dsZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDE0cHggMjZweCAtMTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuNDIpLCAwIDRweCAyM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yKTtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAubGVmdC1uYXYgLm1lbnUtdG9nZ2xlciBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAubGVmdC1uYXYgc3BhbiB7XG4gIGNvbG9yOiAjODc4Nzg3O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDAgMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xuICAubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLmxlZnQtbmF2IHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IHtcbiAgem9vbTogdW5zZXQ7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5yaWdodC1uYXYgLmljb25zIC5sYW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IC5pY29ucyAubGFuZy1jb250YWluZXIgLmN1cnJlbnQtbGFuZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5yaWdodC1uYXYgLmljb25zIC5sYW5nLWNvbnRhaW5lciAuY3VycmVudC1sYW5nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IC5pY29ucyAubGFuZy1jb250YWluZXIgLmN1cnJlbnQtbGFuZyBpbWcge1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luOiAwIDVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMgLmxhbmctY29udGFpbmVyIC5jdXJyZW50LWxhbmcgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IC5pY29ucyAubGFuZy1jb250YWluZXIgdWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMgLmxhbmctY29udGFpbmVyIHVsLm9wZW4ge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMgLmxhbmctY29udGFpbmVyIHVsIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMHB4IDZweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMgLmxhbmctY29udGFpbmVyIHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IC5pY29ucyAubGFuZy1jb250YWluZXIgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5yaWdodC1uYXYgLmljb25zIC5sYW5nLWNvbnRhaW5lciB1bCBsaSBzcGFuIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1NXB4O1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5yaWdodC1uYXYgLmljb25zIC5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IC5pY29ucyAuaWNvbiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzQ0NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5yaWdodC1uYXYgLmljb25zIC5pY29uIGk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMgLmljb24gc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLnRvcC1uYXYgLnJpZ2h0LW5hdiAuaWNvbnMgLmljb24gdWwuaWNvbi1tZW51IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5yaWdodC1uYXYgLmljb25zIC5pY29uIHVsLmljb24tbWVudS5hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogdW5zZXQ7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICB6LWluZGV4OiAxMDtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IC5pY29ucyAuaWNvbiB1bC5pY29uLW1lbnUgbGkubGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxheW91dCAuZGFzaGJvYXJkIC50b3AtbmF2IC5yaWdodC1uYXYgLmljb25zIC5pY29uIHVsLmljb24tbWVudSBsaS5saW5rIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2NjY7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAudG9wLW5hdiAucmlnaHQtbmF2IC5pY29ucyAuaWNvbiB1bC5pY29uLW1lbnUgbGkubGluayBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmNzk2MDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDdweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAuY29udGVudCB7XG4gIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLmNvbnRlbnQubmF2LW9wZW5lZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGF5b3V0IC5kYXNoYm9hcmQgLmNvbnRlbnQgLmRpc21pc3Mtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5sYXlvdXQgLmRhc2hib2FyZCAuY29udGVudCAuZGlzbWlzcy1vdmVybGF5LmRpc21pc3MtbW9kZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG59IiwiQGltcG9ydCAnc3JjL3N0eWxlcy5zY3NzJztcclxuLmxheW91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAvLyA2NSArIDkwICsgMzBcclxuICAuc2lkZS1uYXYge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaWRlbmF2LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNnB4IDM4cHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjU2KSxcclxuICAgICAgMCA0cHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4gICAgJi5jb2xsYXBzZWQge1xyXG4gICAgICB3aWR0aDogOTBweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXIge1xyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpLnVzZXItbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubWVudSB7XHJcbiAgICAgICAgLnByaW1hcnktbWVudSB7XHJcbiAgICAgICAgICAucHJpbWFyeS1saW5rIHtcclxuICAgICAgICAgICAgLmxpbmstZWxlbWVudCB7XHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rLWVsZW1lbnQuZHJvcHBlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIgYSBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLThweDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzliOWI5YjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtOHB4O1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWI5YjliO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbmZvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51c2VyLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXNlci1uYW1lIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcblxyXG4gICAgICAgICAgJi5vcGVuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4My4ycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGkudXNlci1tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmRhbmdlciB7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFuZ2VyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiB1bnNldDtcclxuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm1lbnUge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTU1cHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuXHJcbiAgICAgICAgJi5yZXNwb25zaXZlIHtcclxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjM5cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bC5wcmltYXJ5LW1lbnUge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICBsaS5wcmltYXJ5LWxpbmsge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGluZm8sIDAuMyk7XHJcblxyXG4gICAgICAgICAgICAgIC5kcm9wcGVyIHtcclxuICAgICAgICAgICAgICAgIHpvb206IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGVYKDEuNykgc2NhbGVZKDAuOSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHVsLnN1Yi1tZW51IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluay1lbGVtZW50IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcclxuXHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAmLmRyb3BwZXIge1xyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnXic7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKSBzY2FsZVgoMS43KSBzY2FsZVkoMC45KTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwuc3ViLW1lbnUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICBsaS5zdWItbGlua3Mge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDJuKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluTGVmdCAwLjc1cztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDJuLTEpIHtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodCAwLjc1cztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkIHtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICYuY29sbGFwc2VkLXNpZGVuYXYge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3AtbmF2IHtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAyMDA7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2Nyb2xsZWQge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0yMHB4IDBweCAzOHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41NiksXHJcbiAgICAgICAgICAtM3B4IDBweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcclxuICAgICAgICAgIC00cHggLTFweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGVmdC1uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5tZW51LXRvZ2dsZXIge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTQpLFxyXG4gICAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMiksXHJcbiAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4yNSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICB3aWR0aDogNDFweDtcclxuICAgICAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyNnB4IC0xMnB4IGhzbGEoMCwgMCUsIDYwJSwgMC40MiksXHJcbiAgICAgICAgICAgICAgMCA0cHggMjNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXHJcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAtNXB4IGhzbGEoMCwgMCUsIDYwJSwgMC4yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzg3ODc4NztcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucmlnaHQtbmF2IHtcclxuICAgICAgICB6b29tOiB1bnNldDtcclxuXHJcbiAgICAgICAgLmljb25zIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAubGFuZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuY3VycmVudC1sYW5nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCR3aGl0ZSwgMTAlKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuXHJcbiAgICAgICAgICAgICAgJi5vcGVuIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweCA2cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkd2hpdGUsIDEwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsLmljb24tbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcblxyXG4gICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiB1bnNldDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbGkubGluayB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMCA3cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgICAmLm5hdi1vcGVuZWQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kaXNtaXNzLW92ZXJsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibGFjaywgMC44KTtcclxuXHJcbiAgICAgICAgJi5kaXNtaXNzLW1vZGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBhbmltYXRpb25cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }], menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['menu']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/charts/charts.component */ "./src/app/modules/dashboard/pages/charts/charts.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user/user.component */ "./src/app/modules/dashboard/pages/user/user.component.ts");
/* harmony import */ var _pages_admins_admins_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/admins/admins.component */ "./src/app/modules/dashboard/pages/admins/admins.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SupportDashboardComponent"],
        _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"],
        _pages_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
        _pages_admins_admins_component__WEBPACK_IMPORTED_MODULE_6__["AdminsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SupportDashboardComponent"],
                    _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"],
                    _pages_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                    _pages_admins_admins_component__WEBPACK_IMPORTED_MODULE_6__["AdminsComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/pages/admins/admin.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/admins/admin.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const options = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class AdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getUsers(pagination) {
        return this.httpClient
            .post('admin/users', pagination, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getUser(id) {
        return this.httpClient
            .get('admin/users/' + id.toString(), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    addAdmin(adminUser) {
        return this.httpClient
            .post('admin', adminUser, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    updateAdmin(adminUser) {
        return this.httpClient
            .put('admin', adminUser, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/pages/admins/admins.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/admins/admins.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsComponent", function() { return AdminsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.service */ "./src/app/modules/dashboard/pages/admins/admin.service.ts");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@core/services/auth/auth.service */ "./src/app/@core/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");








function AdminsComponent_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminsComponent_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r89.id, " ");
} }
function AdminsComponent_mat_header_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminsComponent_mat_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r90 = ctx.$implicit;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r82.baseURL + ctx_r82.assetsPath + element_r90.id + "/" + ctx_r82.personalPhotosPath + "/" + element_r90.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AdminsComponent_mat_header_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminsComponent_mat_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r91.fullname, " ");
} }
function AdminsComponent_mat_header_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminsComponent_mat_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r92.mobile, " ");
} }
function AdminsComponent_mat_header_row_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function AdminsComponent_mat_row_26_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminsComponent_mat_row_26_Template_mat_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const row_r93 = ctx.$implicit; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.routeUser(row_r93.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10]; };
class AdminsComponent {
    constructor(adminService, authService, router) {
        this.adminService = adminService;
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.displayedColumns = [
            // 'id',
            'avatar',
            'fullName',
            'mobile',
        ];
        this.total = 0;
        this.page = 1;
        this.perPage = 5;
        this.baseURL = '';
        this.assetsPath = '/Assets/Images/Admins/';
        this.personalPhotosPath = 'PersonalPhotos';
    }
    ngOnInit() {
        this.isLoading = true;
        this.baseURL = this.authService.getBaseURL();
        this.getAdminUsers(this.page, this.perPage);
    }
    getAdminUsers(page, perPage) {
        this.adminService
            .getUsers({ page, numberOfObjectsPerPage: perPage })
            .subscribe((data) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data.users);
            this.total = data.total;
            this.isLoading = false;
        });
    }
    onPageChanges(e) {
        this.isLoading = true;
        this.page = e.pageIndex + 1;
        this.perPage = e.pageSize;
        this.getAdminUsers(this.page, this.perPage);
    }
    routeUser(id) {
        console.log(id);
        this.router.navigate(['dashboard/user', id, 'admin']);
    }
    newAdmin() {
        this.router.navigate(['dashboard/user', 0, 'admin']);
    }
}
AdminsComponent.ɵfac = function AdminsComponent_Factory(t) { return new (t || AdminsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdminsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminsComponent, selectors: [["app-admins"]], decls: 28, vars: 8, consts: [[1, "card"], [1, "card-header", "bg-white", "py-0"], [1, "mat-card-header"], [1, "fas", "fa-user-check", "bg-danger"], [1, "text-capitalize", "mx-3"], [1, "card-body", "mat-card-body"], [1, "tabs"], [1, "btn", "btn-sm", "btn-info", "mx-1", "mt-1", "text-capitalize", 3, "click"], [1, "table-responsive"], [1, "table-container"], [1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "avatar"], ["matColumnDef", "fullName"], ["matColumnDef", "mobile"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["alt", "", 3, "src"], [3, "click"]], template: function AdminsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Admins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminsComponent_Template_button_click_8_listener() { return ctx.newAdmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add new Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminsComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminsComponent_mat_cell_15_Template, 2, 1, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdminsComponent_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminsComponent_mat_cell_18_Template, 2, 1, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminsComponent_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminsComponent_mat_cell_21_Template, 2, 1, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AdminsComponent_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AdminsComponent_mat_cell_24_Template, 2, 1, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminsComponent_mat_header_row_25_Template, 1, 0, "mat-header-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminsComponent_mat_row_26_Template, 1, 0, "mat-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-paginator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AdminsComponent_Template_mat_paginator_page_27_listener($event) { return ctx.onPageChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.total)("pageSize", ctx.perPage)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3BhZ2VzL2FkbWlucy9hZG1pbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admins',
                templateUrl: './admins.component.html',
                styleUrls: ['./admins.component.scss'],
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }, { type: _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/pages/charts/charts.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/charts/charts.component.ts ***!
  \********************************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/statistics/statistics.component */ "./src/app/modules/shared/components/statistics/statistics.component.ts");
/* harmony import */ var _shared_components_chart_pieChart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/chart/pieChart.component */ "./src/app/modules/shared/components/chart/pieChart.component.ts");




class ChartsComponent {
    constructor() {
        this.chartType = 'pie';
        this.chartValues = [300, 500, 200];
        this.chartLabels = [['Download'], ['Sales', 'Mail Sales'], 'Mail Sales'];
        this.chartLegendVisibility = true;
    }
    ngOnInit() { }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) { return new (t || ChartsComponent)(); };
ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartsComponent, selectors: [["app-charts"]], decls: 10, vars: 2, consts: [[1, "row"], [1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "my-4"], ["header", "total profit", "headerIconClass", "fas fa-dollar-sign", "headerColorClass", "bg-success", "value", "$30000", "valueColorClass", "text-success", "messageIconClass", "fal fa-cloud-upload", "messageIconColorClass", "text-success", "message", "last 24 hours"], ["header", "total loss", "headerIconClass", "fas fa-dollar-sign", "headerColorClass", "bg-rose", "value", "$10000", "valueColorClass", "text-danger", "messageIconClass", "fal fa-exclamation-circle", "messageIconColorClass", "text-danger", "message", "last 72 hours"], ["header", "arrived orders", "headerIconClass", "fas fa-tachometer-alt", "headerColorClass", "bg-info", "value", "43%", "valueColorClass", "text-info", "messageIconClass", "fal fa-cloud-upload", "messageIconColorClass", "text-info", "message", "last 24 hours"], [1, "row", "mt-3"], [1, "col-12", "col-lg-6"], ["iconBgColor", "bg-danger", "miniMessage", "last 24 hours", "messageIconClass", "fal fa-cloud-upload", 3, "chartValues", "chartLabels"]], template: function ChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-statistics", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-statistics", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-statistics", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pie-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartValues", ctx.chartValues)("chartLabels", ctx.chartLabels);
    } }, directives: [_shared_components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_1__["StatisticsComponent"], _shared_components_chart_pieChart_component__WEBPACK_IMPORTED_MODULE_2__["PieChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3BhZ2VzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-charts',
                templateUrl: './charts.component.html',
                styleUrls: ['./charts.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/pages/user/user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/user/user.component.ts ***!
  \****************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/models/data-objects */ "./src/app/@core/models/data-objects.ts");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@core/services/auth/auth.service */ "./src/app/@core/services/auth/auth.service.ts");
/* harmony import */ var _core_services_system_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@core/services/system/system.service */ "./src/app/@core/services/system/system.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/modules/dashboard/pages/user/user.service.ts");
/* harmony import */ var _admins_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admins/admin.service */ "./src/app/modules/dashboard/pages/admins/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function UserComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r28.name);
} }
function UserComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r29.name);
} }
function UserComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "birth date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_30_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.userData.birthDay + "/" + ctx_r30.userData.birthMonth + "/" + (ctx_r30.userData.birthYear = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.userData.birthDay + "/" + ctx_r12.userData.birthMonth + "/" + ctx_r12.userData.birthYear);
} }
function UserComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "gander");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_31_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.userData.gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.userData.gender);
} }
function UserComponent_div_36_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r35.name);
} }
function UserComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Residence Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_36_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.userData.residenceCountryId = $event; })("change", function UserComponent_div_36_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.residenceCountryChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserComponent_div_36_option_4_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.userData.residenceCountryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r14.residenceCountries$));
} }
function UserComponent_div_37_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r40.name);
} }
function UserComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Residence City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_37_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.userData.residenceCityId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserComponent_div_37_option_4_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.userData.residenceCityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r15.residenceCities$));
} }
function UserComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Residence Expire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_38_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.userData.residenceExpireDay + "/" + ctx_r43.userData.residenceExpireMonth + "/" + (ctx_r43.userData.residenceExpireYear = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.userData.residenceExpireDay + "/" + ctx_r16.userData.residenceExpireMonth + "/" + ctx_r16.userData.residenceExpireYear);
} }
function UserComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "National Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_43_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.userData.nationalNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.userData.nationalNumber);
} }
function UserComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "National Number Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_44_Template_input_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.openFileInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_div_44_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.userData.nationalNumberImageName = $event; })("change", function UserComponent_div_44_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.onNationalNumberPhotoChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.userData.nationalNumberImageName);
} }
function UserComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_45_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx_r51.showVehicleDetails(_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Vehicle Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserComponent_div_46_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.stopUserChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Stopped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserComponent_div_46_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.suspendUserChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Suspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_47_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.acceptProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Accept Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_div_48_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_ng_template_49_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicles_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vehicles_r62.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicles_r62.type);
} }
function UserComponent_ng_template_49_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const boxType_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", boxType_r63.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](boxType_r63.type);
} }
function UserComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vehicle Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_ng_template_49_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "License Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_49_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.userVehicle.licenseNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "License Picture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_ng_template_49_Template_input_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.openFileInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_49_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.userVehicle.licenseImageName = $event; })("change", function UserComponent_ng_template_49_Template_input_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.onLicensePictureChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vehicle Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_49_Template_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.userVehicle.vehicleId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserComponent_ng_template_49_option_21_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vehicle Model ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_49_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.userVehicle.model = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Plate Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_49_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.userVehicle.plateNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Vehicle Picture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_ng_template_49_Template_input_click_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.openFileInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_49_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.userVehicle.vehicleImageName = $event; })("change", function UserComponent_ng_template_49_Template_input_change_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.onVehiclePictureChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "box Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_ng_template_49_Template_select_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.userBox.boxTypeId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserComponent_ng_template_49_option_40_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_ng_template_49_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.saveVehicleDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_ng_template_49_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.userVehicle.licenseNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.userVehicle.licenseImageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.userVehicle.vehicleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 9, ctx_r24.vehicles$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.userVehicle.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.userVehicle.plateNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.userVehicle.vehicleImageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.userBox.boxTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 11, ctx_r24.boxTypes$));
} }
function UserComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r26.baseURL + "/" + ctx_r26.supportPath + "/" + ctx_r26.userData.id + "/" + ctx_r26.folderPersonalPhotosPath + "/" + ctx_r26.userData.personalImageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.userData.birthYear ? ctx_r27.userData.birthDay + "/" + ctx_r27.userData.birthMonth + "/" + ctx_r27.userData.birthYear : "none", " ");
} }
const _c0 = function () { return ["../"]; };
class UserComponent {
    constructor(authService, systemService, userService, adminService, route, modalService) {
        this.authService = authService;
        this.systemService = systemService;
        this.userService = userService;
        this.adminService = adminService;
        this.route = route;
        this.modalService = modalService;
        this.isReviewing = false;
        this.supportPath = 'Supports';
        this.adminPath = 'Admins';
        this.folderPersonalPhotosPath = 'PersonalPhotos';
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.userId = Number.parseInt(params['id']);
            this.userType = params['type'];
            console.log(this.userType + '    ' + this.userId);
        });
        this.baseURL = this.authService.getBaseURL();
        //this.userData = this.authService.getLoggedUser().supportUser;
        this.loadCountries();
        //console.log(this.userData);
        if (this.userType != null && this.userType.toLowerCase() === 'driver') {
            this.userData = new _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["DriverUser"]();
            if (this.userId == 0)
                return;
            this.loadDriverUserData(this.userId);
        }
        else if (this.userType != null &&
            this.userType.toLowerCase() === 'admin') {
            this.userData = new _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["AdminUser"]();
            if (this.userId == 0)
                return;
            this.loadAdminUserData(this.userId);
        }
        else if (this.userType != null &&
            this.userType.toLowerCase() === 'agent') {
            this.userData = new _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["AgentUser"]();
            if (this.userId == 0)
                return;
        }
    }
    showVehicleDetails(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    }
    loadDriverUserData(id) {
        this.userService.getDriverUserData(id).subscribe((data) => {
            var _a, _b;
            this.userData = data;
            if (this.userData.currentStatusId == _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["StatusTypes"].Reviewing)
                this.isReviewing = true;
            if (this.userData.userVehicles.length > 0)
                this.userVehicle = this.userData.userVehicles[0];
            if (((_a = this.userVehicle) === null || _a === void 0 ? void 0 : _a.userBoxes.length) > 0)
                this.userBox = (_b = this.userVehicle) === null || _b === void 0 ? void 0 : _b.userBoxes[0];
            console.log(this.userData);
            this.loadCities(this.userData.countryId);
            this.loadResidenceCities(this.userData.residenceCountryId);
            this.loadVehicles();
            this.loadBoxTypes();
        });
    }
    loadAdminUserData(id) {
        this.adminService.getUser(id).subscribe((data) => {
            this.userData = data;
            console.log(this.userData);
            this.loadCities(this.userData.countryId);
            this.loadResidenceCities(this.userData.residenceCountryId);
        });
    }
    loadVehicles() {
        this.vehicles$ = this.systemService.getVehicles();
    }
    loadBoxTypes() {
        this.boxTypes$ = this.systemService.getBoxTypes();
    }
    loadCountries() {
        this.countries$ = this.residenceCountries$ = this.systemService.getCountries();
    }
    loadResidenceCities(countryId) {
        this.residenceCities$ = this.systemService.getCities(countryId);
    }
    loadCities(countryId) {
        this.cities$ = this.systemService.getCities(countryId);
    }
    birthCountryChange(event) {
        this.loadCities(event.target.value);
    }
    residenceCountryChange(event) {
        this.loadResidenceCities(event.target.value);
    }
    vehicleDetails() { }
    acceptProfile() {
        // let statusAction : StatusAction = new StatusAction();
        // statusAction.userType = this.userType;
        // statusAction.userId = this.userId;
        // statusAction.statusTypeId = StatusTypes.Working;
        //
        // this.systemService.changeUserStatus(statusAction).subscribe((data) => {
        //
        // });
    }
    save() {
        if (this.userType.toLowerCase() === 'driver')
            this.saveDriverData();
        else if (this.userType.toLowerCase() === 'admin')
            this.saveAdminData();
    }
    saveAdminData() {
        console.log(this.userData);
        if (this.userId > 0) {
            this.adminService.updateAdmin(this.userData).subscribe((result) => {
                if (result == true) {
                    //show message success
                }
            });
        }
        else if (this.userId === 0) {
            this.adminService.addAdmin(this.userData).subscribe((result) => {
                //show message with generated password
            });
        }
    }
    saveDriverData() {
        this.prepareImagesData();
        console.log(this.userData);
        if (this.userId > 0) {
            this.userService.updateDriver(this.userData).subscribe((data) => {
                if (data == true) {
                    this.userService
                        .submitDriverPictures(this.formData)
                        .subscribe((data) => {
                        // adding message success
                    });
                }
            });
        }
    }
    saveVehicleDetails() {
        this.userVehicle.userBoxes = new Array();
        this.userData.userVehicles = new Array();
        this.userVehicle.userBoxes.push(this.userBox);
        this.userData.userVehicles.push(this.userVehicle);
        this.modalRef.hide();
    }
    prepareImagesData() {
        this.formData = new FormData();
        let blob = new Blob();
        this.formData.append('UserID', blob, this.userId.toString());
        this.formData.append('PersonalPhotos', this.userData.personalPhotoFile, this.userData.personalPhotoFile.name);
        this.formData.append('NationalNumberPhotos', this.userData.nationalNumberPhotoFile, this.userData.nationalNumberPhotoFile.name);
        this.formData.append('VehicleLicensePhotos', this.userVehicle.licenseImageFile, this.userVehicle.licenseImageFile.name);
        this.formData.append('VehiclesPhotos', this.userVehicle.vehicleImageFile, this.userVehicle.vehicleImageFile.name);
    }
    stopUserChange(event) {
        let statusAction = new _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["StatusAction"]();
        statusAction.userType = this.userType;
        statusAction.userId = this.userId;
        if (event.target.checked == true)
            statusAction.statusTypeId = _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["StatusTypes"].Stopped;
        else
            statusAction.statusTypeId = _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["StatusTypes"].Working;
        this.systemService.changeUserStatus(statusAction).subscribe((data) => { });
    }
    suspendUserChange(event) {
        let statusAction = new _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["StatusAction"]();
        statusAction.userType = this.userType;
        statusAction.userId = this.userId;
        if (event.target.checked == true)
            statusAction.statusTypeId = _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["StatusTypes"].Suspended;
        else
            statusAction.statusTypeId = _core_models_data_objects__WEBPACK_IMPORTED_MODULE_1__["StatusTypes"].Working;
        this.systemService.changeUserStatus(statusAction).subscribe((data) => { });
    }
    onVehiclePictureChange(event) {
        if (!event ||
            !event.target ||
            !event.target.files ||
            event.target.files.length === 0) {
            return;
        }
        const file = event.target.files[0];
        const extension = file.type.split('/')[1];
        const uniqueNumber = Math.floor(new Date().valueOf() * Math.random());
        // let uniqueNumber =(new Date().getTime()).toString(20);
        const fileName = 'VP_' + uniqueNumber + '.' + extension;
        this.userVehicle.vehicleImageName = fileName;
        this.userVehicle.vehicleImageFile = new File([file], fileName, {
            type: file.type,
        });
        console.log(this.userVehicle.vehicleImageName);
    }
    onLicensePictureChange(event) {
        if (!event ||
            !event.target ||
            !event.target.files ||
            event.target.files.length === 0) {
            return;
        }
        const file = event.target.files[0];
        const extension = file.type.split('/')[1];
        const uniqueNumber = Math.floor(new Date().valueOf() * Math.random());
        // let uniqueNumber =(new Date().getTime()).toString(20);
        const fileName = 'LP_' + uniqueNumber + '.' + extension;
        this.userVehicle.licenseImageName = fileName;
        this.userVehicle.licenseImageFile = new File([file], fileName, {
            type: file.type,
        });
        console.log(this.userVehicle.licenseImageName);
    }
    onNationalNumberPhotoChange(event) {
        if (!event ||
            !event.target ||
            !event.target.files ||
            event.target.files.length === 0) {
            return;
        }
        const file = event.target.files[0];
        const extension = file.type.split('/')[1];
        const uniqueNumber = Math.floor(new Date().valueOf() * Math.random());
        // let uniqueNumber =(new Date().getTime()).toString(20);
        const fileName = 'NNP_' + uniqueNumber + '.' + extension;
        this.userData.nationalNumberImageName = fileName;
        this.userData.nationalNumberPhotoFile = new File([file], fileName, {
            type: file.type,
        });
        console.log(this.userData.nationalNumberImageName);
    }
    onPersonalPhotoChange(event) {
        if (!event ||
            !event.target ||
            !event.target.files ||
            event.target.files.length === 0) {
            return;
        }
        const file = event.target.files[0];
        const extension = file.type.split('/')[1];
        const uniqueNumber = Math.floor(new Date().valueOf() * Math.random());
        // let uniqueNumber =(new Date().getTime()).toString(20);
        const fileName = 'PP_' + uniqueNumber + '.' + extension;
        this.userData.personalImageName = fileName;
        this.userData.personalPhotoFile = new File([file], fileName, {
            type: file.type,
        });
        console.log(this.userData.nationalNumberImageName);
    }
    openFileInput(e) {
        const input = e.target;
        const fileInput = input.nextElementSibling;
        fileInput.click();
        const controlName = fileInput.getAttribute('name');
        fileInput.addEventListener('change', (e) => {
            const inputt = e.target;
            const file = inputt.files[0];
            const fileName = file.name;
            input.value = fileName;
            input.blur();
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_system_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admins_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 72, vars: 35, consts: [[1, "py-4"], [1, "row"], [1, "my-2", "col-xl-8", "col-md-7"], [1, "card"], [1, "card-header", "card-header-shadow", "gradient-info", "text-white", "border-0", "inside-card"], [1, "font-weight-normal", "mb-1", "text-capitalize"], [1, "card-text", "mb-1"], [1, "card-body"], [1, "form-group", "col-xl-6", "col-md-12"], [1, "text-capitalize"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "fullname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "birthCountry", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "birthCity", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group col-xl-6 col-md-12", 4, "ngIf"], ["type", "text", "name", "mobile", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["class", "col-md-12 d-flex justify-content-center", 4, "ngIf"], ["vehicleDetails", ""], [1, "my-2", "col-xl-4", "col-md-5"], ["class", "avatar", 4, "ngIf"], [1, "card-title", "text-center"], [1, "data", "my-3"], [1, "part", "my-2"], [1, "far", "fa-at"], [1, "fas", "fa-map-marker-alt"], ["class", "part my-2", 4, "ngIf"], [1, "fas", "fa-phone-alt"], [1, "text-center"], [1, "btn", "btn-default", "text-white", "text-capitalize", 3, "routerLink"], [3, "value"], ["type", "text", "name", "birthdate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "gender", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Male"], ["value", "Female"], ["name", "residenceCountry", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["name", "residenceCity", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "residenceExpire", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "nationalNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", 3, "click"], ["type", "file", "name", "nationalNumberPhoto", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-warning", "text-capitalize", 3, "click"], [1, "form-group", "col-md-12", "my-3"], [1, "form-check-for-android"], ["type", "checkbox", "id", "stopUser", 1, "form-check-android", 3, "change"], ["for", "stopUser", 1, "form-check-android-label"], ["for", "stopUser", 1, "mx-3"], ["type", "checkbox", "id", "suspendUser", 1, "form-check-android", 3, "change"], ["for", "suspendUser", 1, "form-check-android-label"], ["for", "suspendUser", 1, "mx-3"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "btn", "btn-success", "text-capitalize", 3, "click"], [1, "btn", "btn-info", "text-capitalize", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "text", "name", "licenseNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "licensePicture", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["name", "vehicleType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "vehicleModel", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "plateNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "file", "name", "vehiclePicture", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["name", "boxType", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "avatar"], ["src", "https://ncbae.edu.pk/alhamra_new/wp-content/uploads/2016/08/person-2-200x200.jpg", "alt", ""], ["alt", "", 3, "src"], [1, "fal", "fa-birthday-cake"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_17_listener($event) { return ctx.userData.fullname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_select_ngModelChange_21_listener($event) { return ctx.userData.countryId = $event; })("change", function UserComponent_Template_select_change_21_listener($event) { return ctx.birthCountryChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserComponent_option_22_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_select_ngModelChange_27_listener($event) { return ctx.userData.cityId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserComponent_option_28_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserComponent_div_30_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserComponent_div_31_Template, 8, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_35_listener($event) { return ctx.userData.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UserComponent_div_36_Template, 6, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserComponent_div_37_Template, 6, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UserComponent_div_38_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_42_listener($event) { return ctx.userData.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserComponent_div_43_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UserComponent_div_44_Template, 5, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UserComponent_div_45_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UserComponent_div_46_Template, 13, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, UserComponent_div_47_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, UserComponent_div_48_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, UserComponent_ng_template_49_Template, 47, 13, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UserComponent_div_53_Template, 2, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, UserComponent_div_54_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, UserComponent_div_65_Template, 3, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.userType != "agent" ? "full" : "", " name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.userType != "agent" ? "Birth" : "", " Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.countryId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 30, ctx.countries$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.userType != "agent" ? "Birth" : "", " City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.cityId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 32, ctx.cities$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType != "agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType != "agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType != "agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType != "agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType != "agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType != "agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType == "driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType == "driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isReviewing == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isReviewing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isReviewing == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.personalImageName == null || ctx.userData.personalImageName === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.personalImageName != null && ctx.userData.personalImageName !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.address ? ctx.userData.address : "none", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userType != "agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.mobile ? ctx.userData.mobile : "null", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss'],
            }]
    }], function () { return [{ type: _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _core_services_system_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _admins_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/pages/user/user.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/user/user.service.ts ***!
  \**************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const options = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    }),
};
class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getDriverUserData(id) {
        return this.httpClient
            .get('driver/' + id.toString(), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    acceptRegisteredDriver(id) {
        return this.httpClient
            .get('driver/acceptRegisterDriver/' + id.toString(), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    updateDriver(driver) {
        return this.httpClient
            .put('driver', driver, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    changeUserStatus(statusAction) {
        return this.httpClient
            .put('system/changeUserStatus', statusAction, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    submitDriverPictures(formData) {
        //const headers = new HttpHeaders().append('Content-Type', 'multipart/form-data');
        return this.httpClient.post("driver/upload", formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getNewDriverUsers(pagination) {
        return this.httpClient
            .post('driver/getNewDriverUsers', pagination, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
    getUsers(pagination) {
        return this.httpClient
            .post('driver/Users', pagination, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Errrorrrr not found!');
        }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module-es2015.js.map